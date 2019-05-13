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
manywho.OutcomeManager.handlers["AutoNav"] = OMautoNav;
manywho.OutcomeManager.handlers["ForcePrint"] = OMforcePrint;


for(var key in manywho.OutcomeHandlers)
{
    manywho.OutcomeManager.handlers[key] = manywho.OutcomeHandlers[key];
}
    
// this attaches the Ajax handlers to the manywho.CustomComponentOrchestrator or 
// initialize function if manywho.CustomComponentOrchestrator isnt defined. 
if (!(manywho as any).eventManager) {
    (manywho as any).eventManager = {};
    (manywho as any).eventManager.beforeSendListeners = [];
    (manywho as any).eventManager.doneListeners = [];
    (manywho as any).eventManager.failListeners = [];

    (manywho as any).eventManager.beforeSend = (xhr: XMLHttpRequest, request: any) => {
        (manywho as any).eventManager.beforeSendListeners.forEach((listener: any) => listener(xhr, request));
    };

    (manywho as any).eventManager.done = (xhr: XMLHttpRequest, request: any) => {
        (manywho as any).eventManager.doneListeners.forEach((listener: any) => listener(xhr, request));
    };

    (manywho as any).eventManager.fail = (xhr: XMLHttpRequest, request: any) => {
        (manywho as any).eventManager.failListeners.forEach((listener: any) => listener(xhr, request));
    };

    (manywho as any).eventManager.addBeforeSendListener = (handler: (xhr: XMLHttpRequest, request: any) => void) => {
        (manywho as any).eventManager.beforeSendListeners.push(handler);
    };

    (manywho as any).eventManager.addDoneListener = (handler: (xhr: XMLHttpRequest, request: any) => void) => {
        (manywho as any).eventManager.doneListeners.push(handler);
    };

    (manywho as any).eventManager.addFailListener = (handler: (xhr: XMLHttpRequest, request: any) => void) => {
        (manywho as any).eventManager.failListeners.push(handler);
    };

    manywho.settings.initialize(null, {
        invoke: {
            beforeSend: (manywho as any).eventManager.beforeSend,
            done: (manywho as any).eventManager.done,
            fail: (manywho as any).eventManager.fail,
        },
    });
}

manywho.eventManager.addBeforeSendListener(OMbeforeSendHandler);
manywho.eventManager.addDoneListener(OMdoneHandler);

function OMautoClose(outcome : any, xhr : any, request: any)
{
    window.close();
    return;
}

function OMautoNav(outcome : any, xhr : any, request: any)
{
    var targetUrl = outcome.attributes.AutoNavUrl || "";

    if(targetUrl && targetUrl.length > 0)
    {
        var wnd = window.open(targetUrl, "_self");
    }
    else
    {
        alert("No AutoNavUrl specified in the outcome's attributes");
    }
}



function OMautoOpen(outcome : any, xhr : any, request: any)
{

    var targetUrl = outcome.attributes.AutoOpenUrl || "";

    if(targetUrl && targetUrl.length > 0)
    {
        var wnd = window.open(targetUrl, "_blank");
    }
    else
    {
        alert("No AutoOpenUrl specified in the outcome's attributes");
    }

    /*
    //the outcome's .pageObjectBindingId tells us which component triggered the outcome and inserted the data
    var triggerComponent=outcome.pageObjectBindingId;

    //get the response for the correct component
    var response : any;
    for(var pos = 0 ; pos < request.mapElementInvokeRequest.pageRequest.pageComponentInputResponses.length ; pos++)
    {
        var item = request.mapElementInvokeRequest.pageRequest.pageComponentInputResponses[pos];
        if(item.pageComponentId === triggerComponent)
        {
            response = item;
            break;
        }
    }

    if(response)
    {
        var targetUri = response.contentValue;
        var wnd = window.open(targetUri, "_blank");
    }
    else
    {
        alert("failed to get uri - pageObjectBindingId not found in pageComponentInputResponses");
    }
    */
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
    if(request)
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
    else
    {
        manywho.OutcomeManager.originalRequest  = null;
        manywho.OutcomeManager.stateId = "";
        manywho.OutcomeManager.selectedOutcome = null;
    }
}

class OutcomeManager extends React.Component<any, any> 
{
}

manywho.component.register('OutcomeManager', OutcomeManager);

export default OutcomeManager;

