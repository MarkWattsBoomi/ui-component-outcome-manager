# Outcome Manager

This component Allows you to add an attribute to any page based outcome and then to handle the outcome being selected in java script.

You add an attribute to the outcome e.g. MyOutcomeAction and set it to true to have it fire.

You then need to create a function to handle the event and register it in the player.

There are two OOB functions for AutoClose and ForcePrint.

## Setup

- Grab the js file from the /dist folder and upload it as an asset to your tenant.

- Add the file to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/OutcomeManager.js'
                ],

- Add any custom event handlers of your own: -
	
	 OutcomeHandlers: {
		 "banana": window["bananaHandler"]
		 },

##### Note these need to go immediatly after the customResources declaration as shown.

It's an associative array with the key being the outcome attribute name (case sensitive) and the value is the the function which handles the call. We pass the actual function.


## Implement the functions


In the player code add functions to match your OutcomeHandlers declaration e.g.          	

        <script>  	
                bananaHandler = function()
                {
                        alert("banana");
                }

                var manywho = { ... etc.

##### Note: Place these right at the start of the script section 

- Add the custom attributes to the outcome - they will stack. 

## Overriding Default Functions

You can override the default AutoClose or ForcePrint methods by re-implementing the functions e.g.

        <script>
                var AutoClose = function()
                {
                        alert("banana");
                };

                var manywho = { ... etc.
            
