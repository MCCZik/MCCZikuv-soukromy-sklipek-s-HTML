var teplota;
var tepmesic;


function Vypočítat() {
    if (document.getElementById("mesic").value == 1) {
        teplota = "5 - 10";
        tepmesic = "Lednu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 2) {
        teplota = "7 - 14";
        tepmesic = "Únoru";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 3) {
        teplota = "10 - 16";
        tepmesic = "Březnu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 4) {
        teplota = "15 - 24";
        tepmesic = "Dubnu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 5) {
        teplota = "16 - 27";
        tepmesic = "Květnu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 6) {
        teplota = "18 - 29";
        tepmesic = "Červnu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 7) {
        teplota = "20 - 35";
        tepmesic = "Červenci";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 8) {
        teplota = "25 - 40";
        tepmesic = "Srpnu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 9) {
        teplota = "15 - 23";
        tepmesic = "Září";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 10) {
        teplota = "10 - 20";
        tepmesic = "Říjnu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 11) {
        teplota = "3 - 10";
        tepmesic = "Listopadu";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
    if (document.getElementById("mesic").value == 12) {
        teplota = "-15 - -5";
        tepmesic = "Prosinci";
        document.getElementById("tepmesic").innerText = "Průměrná teplota v " + tepmesic + ":";
        document.getElementById("teplota").innerText = teplota + "°C";
    }
}