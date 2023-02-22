var xmlns = "http://www.w3.org/2000/svg";
 
var Up = false;
var Left = false;
var Right = false;
var Down = false;
 
var FPS = 60;
var Speed = 4;
var Score = 0;
var Difficulty = 0.01;
var Odměna = 1;
var Interval;
var JidloX;
var JidloY;


function start() {
    Interval = setInterval(Engine, (1000/FPS));
}

function KD(event) {
    switch (event.keyCode) {
        case 37:{
            Left = true;
            break;
        }
        case 38:{
            Up = true;
            break;
        }
        case 39:{
            Right = true;
            break;
        }
        case 40:{
            Down = true;
            break;
        }
        default:{
            break;
        }
    }
}
    
function KU(event) {
    switch (event.keyCode) {
        case 37:{
            Left = false;
            break;
        }
        case 38:{
            Up = false;
            break;
        }
        case 39:{
            Right = false;
            break;
        }
        case 40:{
            Down = false;
            break;
        }
        default:{
            break;
        }
    }
}
    
    
function Engine() {
    if(Right) {
        var X = parseFloat(document.getElementById("rect1").getAttribute("x"));
        X += Speed;
        document.getElementById("rect1").setAttribute("x", X);
    }
    if(Left) {
        var X = parseFloat(document.getElementById("rect1").getAttribute("x"));
        X += -Speed;
        document.getElementById("rect1").setAttribute("x", X);
    }
    if(Up) {
        var Y = parseFloat(document.getElementById("rect1").getAttribute("y"));
        Y += -Speed;
        document.getElementById("rect1").setAttribute("y", Y);
    }
    if(Down) {
        var Y = parseFloat(document.getElementById("rect1").getAttribute("y"));
        Y += Speed;
        document.getElementById("rect1").setAttribute("y", Y);
    }

    var X = parseFloat(document.getElementById("rect1").getAttribute("x"));
    var Y = parseFloat(document.getElementById("rect1").getAttribute("y"));

    if (X < 0) {X = 0};
    if (X > 380) {X = 380};
    if (Y < 0) {Y = 0};
    if (Y > 380) {Y = 380};

    document.getElementById("rect1").setAttribute("x", X);
    document.getElementById("rect1").setAttribute("y", Y);

    if(Math.abs(X - JidloX) < 20 && Math.abs(Y - JidloY) < 20) {
        Init();
        Speed += Odměna;
        Odměna -= Difficulty;
        Score += 1;
    }

    Speed -= Difficulty;
    if (Speed < 0) {
        clearInterval(Interval);
        alert("Konec hry! Získal jsi " + Score + " bodů. F5 pro restart")
    }

    document.getElementById("par1").innerHTML = "Score : "+Score+"<br>Speed : "+Speed;
}
function Init() {
    var newX = Math.random() * 380;
    var newY = Math.random() * 380;
    document.getElementById("rect2").setAttribute("x", newX);
    document.getElementById("rect2").setAttribute("y", newY);
    JidloX = newX;
    JidloY = newY;
}

