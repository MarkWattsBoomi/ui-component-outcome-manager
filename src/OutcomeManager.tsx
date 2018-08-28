declare var manywho: any;

import * as React from 'react';


var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));
var tenantId = queryParameters['tenant-id'];
if (!tenantId) 
{
    tenantId = window.location.pathname
                .split('/')
                .filter(function (path) 
                {
                    return path && path.length > 0;
                })[0];
}
    

//declare global { interface Window {OutcomeManager: any;}}
manywho.OutcomeManager = {};
manywho.OutcomeManager.tenantId  = tenantId;
manywho.OutcomeManager.originalRequest;
manywho.OutcomeManager.handlers = {};
manywho.OutcomeManager.handlers["AutoClose"] = OMautoClose;
manywho.OutcomeManager.handlers["AutoOpen"] = OMautoOpen;
manywho.OutcomeManager.handlers["ForcePrint"] = OMforcePrint;


for(var key in manywho.OutcomeHandlers)
{
    manywho.OutcomeManager.handlers[key] = manywho.OutcomeHandlers[key];
}
    
// this attaches the Ajax handlers to the manywho.CustomComponentOrchestrator or 
// initialize function if manywho.CustomComponentOrchestrator isnt defined.  
if(manywho.CustomComponentOrchestrator)
{
    manywho.CustomComponentOrchestrator.onBeforeSendHandlers.push(OMbeforeSendHandler);
    manywho.CustomComponentOrchestrator.doneSendHandlers.push(OMdoneHandler);
}
else
{
    manywho.settings.initialize(
        {
        }
        ,
        {
            invoke: 
            {
                beforeSend: OMbeforeSendHandler,
                done: OMdoneHandler                
            }
        }
    );
}


function OMautoClose(outcome : any, xhr : any, request: any)
{
    window.close();
    return;
}

function OMautoOpen(outcome : any, xhr : any, request: any)
{
    var targetUri = request.mapElementInvokeRequest.pageRequest.pageComponentInputResponses[0].contentValue;
    var componentId = request.mapElementInvokeRequest.pageRequest.pageComponentInputResponses[0].pageComponentId;

    var wnd = window.open(targetUri, "_blank");
    return;
}

function OMforcePrint(outcome : any, xhr : any, request: any)
{
    window.print();
    return;
}
    
function OMdoneHandler(xhr: any , request: any)
{
    //check close flag and if set just kill the window
    if( manywho.OutcomeManager && manywho.OutcomeManager.selectedOutcome && manywho.OutcomeManager.selectedOutcome.attributes )
    {
        //loop over each outcome and call its associated handler in the player if it exists
        //some default common ones will default to the handlers in  here if not.
        for( var key in manywho.OutcomeManager.selectedOutcome.attributes )
        {
            if(manywho.OutcomeManager.handlers[key] && manywho.OutcomeManager.selectedOutcome.attributes[key] === "true")
            {
                var functionName = manywho.OutcomeManager.handlers[key];
                manywho.OutcomeManager.handlers[key](manywho.OutcomeManager.selectedOutcome, xhr, manywho.OutcomeManager.originalRequest);
            }
            
        }
    }
}

//this saves the last selected outcome in the OutcomeManager           
function OMbeforeSendHandler(xhr: any, request: any )
{
    manywho.OutcomeManager.originalRequest  = request;
    manywho.OutcomeManager.stateId = request.stateId;
    var outcomeId = request.mapElementInvokeRequest.selectedOutcomeId;
    if(manywho.OutcomeManager.tenantId && manywho.OutcomeManager.stateId && outcomeId )
    {
        var flowKey = manywho.OutcomeManager.tenantId + "___" + manywho.OutcomeManager.stateId;
        manywho.OutcomeManager.selectedOutcome = manywho.model.getOutcome( outcomeId  ,  flowKey );
    }
}

class OutcomeManager extends React.Component<any, any> 
{
}

manywho.component.register('OutcomeManager', OutcomeManager);

export default OutcomeManager;

