function Init() {
    SwitchScreen("window1")
}
function SwitchScreen(window) {
    for (let index = 0; index < document.getElementsByClassName("window").length; index++) {
        document.getElementsByClassName("window")[index].setAttribute("hidden", true);
    }
    document.getElementById(window).removeAttribute("hidden");
}




function StartSim() {
    SwitchScreen("window2");
}