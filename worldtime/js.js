function Init() {
    Vypočítat;
    var Interval = setInterval(Vypočítat, 500);
}

function Vypočítat() {
    var ČP1 = parseInt(document.getElementById("mojeCP").value);
    var ČP2 = parseInt(document.getElementById("jineCP").value);
    var Datum = new Date;
    var HodinyMoje = Datum.getHours();
    var Minuty = ("0" + Datum.getMinutes()).slice(-2);
    var Sekundy = ("0" + Datum.getSeconds()).slice(-2);
    var HodinyCizí = HodinyMoje - ČP1 + ČP2;
    document.getElementById("mujCas").innerText = "Muj cas : " + HodinyMoje + ":" + Minuty + ":" + Sekundy;
    document.getElementById("jinyCas").innerText = "Jiny cas : " + HodinyCizí + ":" + Minuty + ":" + Sekundy;
}