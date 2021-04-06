/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    /*
    function success(result) {
        alert(result);
    }
    setTimeout(function() {
        cordova.exec(success, null, "CordovaNewPlugin", "coolMethod", ["sample in"]);
    }, 10000)
    */

    function success(result) {
        document.getElementById("callbackReturn").innerHTML = result;
    };
    function error(result) {
        document.getElementById("callbackReturn").innerHTML = result;
    }
    setTimeout(function() {
        cordova.exec(success, error, "NewPlugin", "coolMethod", ["init"]);
    }, 1000);

    //on button press, pass the user's input to the native code for echoing
    document.getElementById("submitInput").addEventListener("click", function () {
        let inputText = document.getElementById("inputArea").value;
        document.getElementById("enteredMessage").innerHTML = inputText;

        cordova.exec(success, error, "NewPlugin", "coolMethod", [inputText]);
    }, false);
    

    console.log('we\'re live.');
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
