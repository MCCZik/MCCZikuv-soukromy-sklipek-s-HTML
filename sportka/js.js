var Rychlost1 = 0;
var Stupně1 = 0;
var Interval1 = setInterval(Točení1, (1000/30))
var Točíme1 = false;

function Točit() {
    Točit1();
    Točit2();
    Točit3();
    Točit4();
    Točit5();
    Točit6();
}
function Točit1() {
    Rychlost = 18 + ( 6 * Math.random());
    Točíme = true;
}

function Točení1() {
    if (Točíme1 == true) {
        Rychlost1 -= 0.1;
        Stupně1 += Rychlost1;
        if (Stupně1 > 360) {
            Stupně1 -= 360;
        }    
        document.getElementById("kolo1").style.transform = "rotateZ(" + Stupně1 + "deg)";
        if (Rychlost1 < 0) {
            Rychlost1 = 0;
            Točíme1 = false;
        }
    }
}

var Rychlost2 = 0;
var Stupně2 = 0;
var Interval2 = setInterval(Točení2, (1000/30))
var Točíme2 = false;


function Točit2() {
    Rychlost = 18 + ( 6 * Math.random());
    Točíme = true;
}

function Točení2() {
    if (Točíme2 == true) {
        Rychlost2 -= 0.1;
        Stupně2 += Rychlost2;
        if (Stupně2 > 360) {
            Stupně2 -= 360;
        }    
        document.getElementById("kolo2").style.transform = "rotateZ(" + Stupně2 + "deg)";
        if (Rychlost2 < 0) {
            Rychlost2 = 0;
            Točíme2 = false;
        }
    }
}


var Rychlost3 = 0;
var Stupně3 = 0;
var Interval3 = setInterval(Točení3, (1000/30))
var Točíme3 = false;


function Točit3() {
    Rychlost = 18 + ( 6 * Math.random());
    Točíme = true;
}

function Točení3() {
    if (Točíme3 == true) {
        Rychlost3 -= 0.1;
        Stupně3 += Rychlost3;
        if (Stupně3 > 360) {
            Stupně3 -= 360;
        }    
        document.getElementById("kolo3").style.transform = "rotateZ(" + Stupně3 + "deg)";
        if (Rychlost3 < 0) {
            Rychlost3 = 0;
            Točíme3 = false;
        }
    }
}


var Rychlost4 = 0;
var Stupně4 = 0;
var Interval4 = setInterval(Točení4, (1000/30))
var Točíme4 = false;


function Točit4() {
    Rychlost = 18 + ( 6 * Math.random());
    Točíme = true;
}

function Točení4() {
    if (Točíme4 == true) {
        Rychlost4 -= 0.1;
        Stupně4 += Rychlost4;
        if (Stupně4 > 360) {
            Stupně4 -= 360;
        }    
        document.getElementById("kolo4").style.transform = "rotateZ(" + Stupně4 + "deg)";
        if (Rychlost4 < 0) {
            Rychlost4 = 0;
            Točíme4 = false;
        }
    }
}


var Rychlost5 = 0;
var Stupně5 = 0;
var Interval5 = setInterval(Točení5, (1000/30))
var Točíme5 = false;


function Točit5() {
    Rychlost = 18 + ( 6 * Math.random());
    Točíme = true;
}

function Točení5() {
    if (Točíme5 == true) {
        Rychlost5 -= 0.1;
        Stupně5 += Rychlost5;
        if (Stupně5 > 360) {
            Stupně5 -= 360;
        }    
        document.getElementById("kolo5").style.transform = "rotateZ(" + Stupně5 + "deg)";
        if (Rychlost5 < 0) {
            Rychlost5 = 0;
            Točíme5 = false;
        }
    }
}


var Rychlost6 = 0;
var Stupně6 = 0;
var Interval6 = setInterval(Točení6, (1000/30))
var Točíme6 = false;


function Točit6() {
    Rychlost = 18 + ( 6 * Math.random());
    Točíme = true;
}

function Točení6() {
    if (Točíme6 == true) {
        Rychlost6 -= 0.1;
        Stupně6 += Rychlost6;
        if (Stupně6 > 360) {
            Stupně6 -= 360;
        }    
        document.getElementById("kolo6").style.transform = "rotateZ(" + Stupně6 + "deg)";
        if (Rychlost6 < 0) {
            Rychlost6 = 0;
            Točíme6 = false;
        }
    }
}