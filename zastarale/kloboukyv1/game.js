var CompCoiny = 0;
var CompCoinyZaKlik = 1;
var CenaVylepšení1 = 20;
var kod;

function Button1() {
    CompCoiny += CompCoinyZaKlik;
    document.getElementById("CompCoiny").innerText = CompCoiny + " CompCoinů";
    if (CompCoiny == "10000000") {
        window.alert("Kód: ADST8D-O1OIDQ");
    }
}
 
function Button2() {
    if (CompCoiny >= CenaVylepšení1) {
        CompCoiny -= CenaVylepšení1;
        CompCoinyZaKlik *= 2;
        CenaVylepšení1 = Math.floor(CenaVylepšení1 * 2.5);
        document.getElementById("CompCoiny").innerText = CompCoiny + " CompCoinů";
        document.getElementById("cena1").innerText = "Cena : " + CenaVylepšení1 + " CompCoinů";
    } else {
        window.alert("Nemáš dostatek CompCoinů!!!");
    }
}

function Button3() {
    kod = window.prompt("Zadejte kód (XXXXXX-XXXXXX)");
    if (kod == "ADST8D-O1OIDQ") {
        window.alert("Vyhrál jsi!");
        window.alert("Pro restart hry stiskněte F5");
    } else {
        window.alert("Spatny kod!");
    }
}