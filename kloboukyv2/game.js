var Klobouky = 0;
var KloboukyZaKlik = 1;
var KloboukyZaVteřinu = 0;
var CenaVylepšení1 = 20;
var ČasovýObjekt = new Date;
var PříštíVteřina = ČasovýObjekt.getTime() + 1000;
var Interval = setInterval(KPS, 250);
var AUTO = 
[   
    {
        "cena":100,
        "kps":2,
        "incr":2.2
    },{
        "cena":10000,
        "kps":25,
        "incr":2.5
    },{
        "cena":500000,
        "kps":1000,
        "incr":3 
    }
]

function Button1() {
    Klobouky += KloboukyZaKlik;
    document.getElementById("klobouky").innerText = Klobouky + " Klobouků";
    document.getElementById("kzk").innerText = KloboukyZaKlik + " Klobouků za klik";
}

function Button2() {
    if (Klobouky >= CenaVylepšení1) {
        Klobouky -= CenaVylepšení1;
        KloboukyZaKlik *= 2;
        CenaVylepšení1 = Math.floor(CenaVylepšení1 * 2.5);
        document.getElementById("klobouky").innerText = Klobouky + " klobouků";
        document.getElementById("cena1").innerText = "Cena : " + CenaVylepšení1 + " klobouků";
    } else {
        window.alert("Nemáš dostatek klobouků!!!");
    }
}

function Koupit(Co) {
    var Objekt = AUTO[Co];
    if (Klobouky >= Objekt.cena) {
        Klobouky -= Objekt.cena;
        KloboukyZaVteřinu += Objekt.kps;
        Objekt.cena = Math.floor(Objekt.incr * Objekt.cena);
        document.getElementById("klobouky").innerText = Klobouky + " klobouků";
        document.getElementById("kps").innerText = KloboukyZaVteřinu + " Klobouků za vteřinu";
        document.getElementById("kps" + Co).innerText = "Cena : " + Objekt.cena + " klobouků";
    } else {
        window.alert("Nemáš dostatek klobouků!!!")
    }
}

function KPS() {
    console.log("tick")
    ČasovýObjekt = new Date;
    if (ČasovýObjekt.getTime() >= PříštíVteřina) {
        PříštíVteřina += 1000;
        document.getElementById("klobouky").innerText = Klobouky + " klobouků";
        Klobouky += KloboukyZaVteřinu; 
    }
}