// inside file www/echoplugin.js
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