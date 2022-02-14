function SwitchScreen(window) {
    for (let index = 0; index < document.getElementsByClassName("window").length; index++) {
        document.getElementsByClassName("window")[index].setAttribute("hidden", true);
    }
    document.getElementById(window).removeAttribute("hidden");
}


function home() {
    SwitchScreen("window1")
}
function work() {
    SwitchScreen("window2")
}
function contact() {
    SwitchScreen("window3")
}