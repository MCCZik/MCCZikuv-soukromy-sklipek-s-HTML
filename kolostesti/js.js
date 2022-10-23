var Rychlost = 0;
var Stupně = 0;
var Interval1 = setInterval(Točení, (1000/30))
var Točíme = false;
function Točit() {
    Rychlost = 24 + ( 6 * Math.random());
    Točíme = true;
}

function Točení() {
    if (Točíme == true) {
        Rychlost -= 0.1;
        Stupně += Rychlost;
        if (Stupně > 360) {
            Stupně -= 360;
        }    
        document.getElementById("kolo").style.transform = "rotateZ(" + Stupně + "deg)";
        if (Rychlost < 0) {
            Rychlost = 0;
            Točíme = false;
            Alert();
        }
    }
}
function Alert() {
    Stupně = Stupně % 90;
    if (Stupně < 60 && Stupně > 30) {
        window.alert("Prohrál jsi!")
    } else {
        if (Stupně <= 30) {
            window.alert("Vyhrál jsi!")
        } else {
            window.alert("Zatoč znovu!")
        }
    }
}