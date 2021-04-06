# cordova_sample_echo

An implementation of the echo plugin outlined on [Cordova's official webpage.](https://cordova.apache.org/docs/en/10.x/guide/platforms/windows/plugin.html) 

<br>

### Overview

As likely expected, this code accepts user's input, passes it though a callback and into native CPP/CLI code, and then returns it to the frontend JavaScript. The code sends a message automatically ("init") one second after startup, and can then echo any user-generated message.

<br>

### Deployment

Before deploying the Cordova app, the windows code must be compiled. Binaries are included in this repository for users who do not want to install the toolchain required to compile the runtime component.
<br>
For those who wish to compile the runtime components themselves, first install Visual Studio 2017, then install C++/CLI support. The code is compiled from a developer prompt with `cl /ZW /LD EchoRuntimeComponent.cpp`.

Once the code is compiled and the plugin is added, launch the application with `cordova run windows --archs=x86`

<br> 

### Usage

![Example of the echo function.](docs/Capture.png?raw=true "")
