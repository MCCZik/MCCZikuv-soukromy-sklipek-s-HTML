var def= "off";
function onoff() {
    if (def == "off") {
        document.getElementById("onofft").innerText = "Zapnuto";
        document.getElementById("onoffb").innerText = "Vypnout";
        def = "on";
    } else {
        document.getElementById("onofft").innerText = "Vypnuto";
        document.getElementById("onoffb").innerText = "Zapnout";
        def = "off";
    }
}