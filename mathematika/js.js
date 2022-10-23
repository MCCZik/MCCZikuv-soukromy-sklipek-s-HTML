var answer = 0;
var Znt = "";
var Cislo1 = 1;
var Cislo2 = 1;
var zbytek = 0;
var Zn = 0;
var cislobez = 0;
var spravne = 0;
var spatne = 0;
var total = 0;
function Init() {
    if ((spravne-spatne) == 10) {
        window.alert('Konec hry! Deset správných příkladů jsi vypočítal za celkový čas: '+ total)
    }
    document.getElementById('count').innerText = 'Spravne: ' + spravne + ', Spatne: ' + spatne;
    zbytek = 0;
    cislobez = 0;
    Cislo1 = Math.floor(Math.random()*100 +1);
    Cislo2 = Math.floor(Math.random()*50 +1);
    Zn = Math.floor(Math.random()*4 +1);
    if (Zn == 1) {
        Znt = "+";
        answer = Math.floor(Cislo1 + Cislo2);
        Show();
    } else if (Zn == 2) {
        Znt = "-";
        answer = Math.floor(Cislo1 - Cislo2);
        Show();
    } else if (Zn == 3) {
        Znt = "*";
        answer = Math.floor(Cislo1 * Cislo2);
        Show();
    } else if (Zn == 4) {
        Znt = "/";
        zbytek = Cislo1 % Cislo2;
        cislobez = Cislo1-zbytek;
        if (cislobez == 0) {
            cislobez = cislobez + ((Zn+4)*Cislo2);
        }
        answer = Math.floor(cislobez / Cislo2);
        Show();
    }
}

function Show() {
    document.getElementById('example').innerText = (Cislo1-zbytek) + Znt + Cislo2 + "= ?";
}

function Check() {
    var Vysledek = document.getElementById('answer').value;
    if (Vysledek == answer && Vysledek != NaN)
         {
        document.getElementById('answer').value = "";
        document.getElementById('result').innerText ='Ano, správně!';
        spravne += 1;
        Init();
    } else {
        document.getElementById('answer').value = "";
        document.getElementById('result').innerText ='Ne, zkus jiný!';
        spatne += 1;
        Init();
    }
}