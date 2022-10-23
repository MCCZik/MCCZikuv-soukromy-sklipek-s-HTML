var pujcka;
var pujck;
var celkem;
var Přeplatíte;
var Přeplatít;
var dan;
var da;
var celke;

function Vypočítat() {
    pujck = document.getElementById("pujcka").value;
    pujcka = parseInt(pujck);
    da = pujcka / 5;
    dan = da * 7;
    celke = dan + pujcka;
    celkem = Math.floor(celke);
    Přeplatít = dan;
    Přeplatíte = Math.floor(Přeplatít);
    document.getElementById("přeplatit").innerText = Přeplatíte + " Kč"; 
    document.getElementById("Vrátit").innerText = celkem + " Kč"; 

}