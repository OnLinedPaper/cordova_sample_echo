//either of these methods work to create the echo function - 
//but neither are actually necessary for the native windows app, which
//skips the interface and goes to the proxy page.

/*
var CordovaNewPlugin = {
    // the echo function calls successCallback with the provided text in strInput
    // if strInput is empty, it will call the errorCallback
    coolMethod:function(successCallback, errorCallback, strInput) {
        cordova.exec(successCallback,errorCallback,"CordovaNewPlugin","coolMethod",[strInput]);
    }
}


window.coolMethod = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "NewPlugin", "coolMethod", [str]);
};
*/