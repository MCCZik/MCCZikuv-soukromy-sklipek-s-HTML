var remtime;    
var Interval = setInterval(Počítání, (1000/30));
var pocet = "f";
var remtimez = 0;
var ptf = false;


function Reset() {
    pocet = "f";
    remtime = document.getElementById("zbc").value;
}

function Počítání() {
    if (pocet == true) {
        remtime -= 0.0375;
        remtimez = Math.floor(remtime);
        document.getElementById("zobraz").innerText = "Zbývá: " + remtimez + "s";
    }
    if (remtime <= 0) {
        document.getElementById("zobraz").innerText = "Konec!";
    }
}


function del() {
    pocet = "f";
    document.getElementById("zbc").value = "";
    document.getElementById("zobraz").innerText = "Zbývá: " + "0s";
}
function Začít() {
    Reset();
    pocet = true;
    Počítání();
}

function stop() {
    Reset();
    document.getElementById("zobraz").innerText = "Zastaveno!";
}

function pause() {
    if (ptf == false) {
        ptf = true;
        document.getElementById("zobraz").innerText = "Pozastaveno!";
        pocet = false;
    }
}

function renew() {
    if (ptf == true) {
        ptf = false;
        pocet = true;
    }
}