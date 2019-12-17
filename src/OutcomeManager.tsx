import '/Operational Data/Flow UI Custom Components/2019 Version/FlowComponentModel/src/EventManager';
declare const manywho: any;

/*
let originalRequest: any;
let selectedOutcome: string = '';
let stateId: string;
let stateToken: string;
let currentMapElement: string;
let tenantId: string;
*/

let handlers: {[key: string] : any} = [];
handlers["AutoOpen"] = OMautoOpen;
handlers["AutoNav"] = OMautoNav;
handlers["AutoClose"] = OMautoClose;
handlers["AutoPrint"] = OMAutoPrint;


manywho.eventManager.addBeforeSendListener(OMbeforeSendHandler,"outcome-manager");
//manywho.eventManager.addDoneListener(OMdoneHandler, "outcome-manager");

//this saves the last selected outcome in the OutcomeManager           
function OMbeforeSendHandler(xhr: any, request: any )
{
    if(request)
    {
        let message: any = {};
        message.stateId = request.stateId;
        message.stateToken = request.stateToken;
        message.currentMapElement = request.currentMapElementId;
        message.originalRequest  = request;
        message.tenantId = window.location.pathname.split("\/")[1];
        message.outcomeId = request.mapElementInvokeRequest.selectedOutcomeId;
        message.baseUrl = window.location.origin;

        if(message.tenantId && message.stateId && message.outcomeId )
        {
            message.flowKey = message.tenantId + "___" + message.stateId;
            message.outcome = manywho.model.getOutcome( message.outcomeId  ,  message.flowKey );

            if(message.outcome) {
                let attributes: {[name: string]: string} = message.outcome.attributes;
                if(attributes) {
                    Object.keys(attributes).forEach((attributeName: string) => {
                        if(handlers[attributeName] && attributes[attributeName].trim().toLowerCase() === "true") {
                            handlers[attributeName](message, xhr, request); 
                        }
                    });
                }
            }
        }
    }
}

/*
function OMdoneHandler(xhr: any , request: any)
{
    //check close flag and if set just kill the window
   // if( manywho.OutcomeManager && manywho.OutcomeManager.selectedOutcome && manywho.OutcomeManager.selectedOutcome.attributes )
    //{
        //loop over each outcome and call its associated handler in the player if it exists
        //some default common ones will default to the handlers in  here if not.
        //for( var key in manywho.OutcomeManager.selectedOutcome.attributes )
        //{
            //if(manywho.OutcomeManager.handlers[key] && manywho.OutcomeManager.selectedOutcome.attributes[key] === "true")
            //{
            //    var functionName = manywho.OutcomeManager.handlers[key];
            //    manywho.OutcomeManager.handlers[key](manywho.OutcomeManager.selectedOutcome, xhr, manywho.OutcomeManager.originalRequest);
           // }
            
        //}
    //}
}
*/


function OMautoClose(message : any, xhr : any, request: any)
{
    window.close();
    return;
}

async function OMautoNav(message : any, xhr : any, request: any)
{
    var targetUrl = message.outcome.attributes.AutoNavUrl || "";

    if(targetUrl && targetUrl.length > 0)
    {
        var url = await getValue(message, targetUrl)
        var wnd = window.open(url, "_self");
    }
    else
    {
        alert("No AutoNavUrl specified in the outcome's attributes");
    }
}



async function OMautoOpen(message: any, xhr : any, request: any)
{

    var targetUrl = message.outcome.attributes.AutoOpenUrl || "";

    if(targetUrl && targetUrl.length > 0)
    {
        var url = await getValue(message, targetUrl)
        var wnd = window.open(url, "_blank");
    }
    else
    {
        alert("No AutoOpenUrl specified in the outcome's attributes");
    }

}

function OMAutoPrint(message : any, xhr : any, request: any)
{
    window.print();
    return;
}
    


async function getValue(message: any, value: string): Promise<string> {

    if(value.trim().startsWith("{{") && value.trim().endsWith("}}")) {
        let stripped: string = value.replace('{{', '');
        stripped = stripped.replace('}}', '');    
        const valueurl = `${message.baseUrl}/api/run/1/state/${message.stateId}/values/name`;
        const val: any = await manywho.connection.request(null, "", valueurl + "/" + stripped , 'GET', message.tenantId, message.stateId, manywho.state.getAuthenticationToken(message.flowKey), {});
        if(val.developerName) { 
            console.log("Value '" + stripped + "' contained '" + val.contentValue + "'");
            return val.contentValue as string;
        }
        else {
            console.log("No value named '" + stripped + "' esists in the flow");
            return "";
        }
        
    }
    else {
        return value.trim();
    }
}


