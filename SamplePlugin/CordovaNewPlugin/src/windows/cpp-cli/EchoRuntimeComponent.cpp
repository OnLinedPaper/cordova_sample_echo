#include "EchoRuntimeComponent.h"

// in the implementation file .cpp
using namespace EchoRuntimeComponent;
using namespace Platform;

Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
{
    if(input->IsEmpty())
    {
        return "Error: input string is empty.";
    }
    else
    {
        return "native C++/CLI success (" + input->ToString() + ")";
    }
}

//compile with  cl /ZW /LD EchoRuntimeComponent.cpp
//prepare with  cordova plugin remove cordova-new-plaugin; cordova plugin add .\CordovaNewPlugin\
//execute with  cordova run windows --archs=x86 --verbose