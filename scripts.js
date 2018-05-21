//scripts.js

//What platform the device is: returned when function CheckDevice is called in the document onReady 
var devicePlatform;

//device ready function
document.addEventListener("deviceready", IsMyDeviceReady, false);

function IsMyDeviceReady() {
    document.getElementById("DivButtons").style.display = "block";
    devicePlatform = device.platform;
    document.getElementById("DivOS").innerHTML = "OS: " + devicePlatform;
}

function TurnOnFlashlight() {
    window.plugins.flashlight.switchOn();
}

function TurnOffFlashlight() {
    window.plugins.flashlight.switchOff();
}
document.getElementById("BtnToggleLight").addEventListener("click", function () {
    if (this.value == "TURN ON") {
        TurnOnFlashlight();
        this.value = "TURN OFF";

    }else{
        TurnOffFlashlight();
        this.value = "TURN ON";
    }
});