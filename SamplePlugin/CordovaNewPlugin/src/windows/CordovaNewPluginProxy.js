// or alternative syntax

module.exports = {
    coolMethod: function(successCallback, errorCallback, strInput) {
        try {
            let res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        } catch (error) {
            errorCallback(error.name + ": " + error.message);
        }

        /*
          pure JS plugin implementation of echo - not used now, but
          left in as proof of concept. useful when troubleshooting for 
          determining whether the error lies with the native code or the plugin.
        */
        /*
        if(!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            successCallback("pure JS success (" + strInput + ")");
        }
        */
        
    }
};

require('cordova/exec/proxy').add('NewPlugin', module.exports);