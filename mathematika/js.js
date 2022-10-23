var answer;
function Init() {
    var Znt;
    var Cislo1 = Math.floor(Math.random()*100 +1);
    var Cislo2 = Math.floor(Math.random()*50 +1);
    var Zn = Math.floor(Math.random()+1*4);
    if (Zn == 1) {
        Znt = "+";
        answer = Math.floor(Cislo1 + Cislo2);
    }
    if (Zn == 2) {
        Znt = "-";
        answer = Math.floor(Cislo1 - Cislo2);
    }
    if (Zn == 3) {
        Znt = "*";
        answer = Math.floor(Cislo1 * Cislo2);
    }
    if (Zn == 4) {
        Znt = "/";
        answer = Math.floor(Cislo1 / Cislo2);
    }
    document.getElementById('example').innerText = Cislo1 + Znt + Cislo2 + "= ?";
}

function Check() {
    var Vysledek = document.getElementById('answer').value;
    if (Vysledek == answer && Vysledek != NaN)
         {
        document.getElementById('answer').value = "";
        window.alert('Ano, správně!');
        Init();
    } else {
        document.getElementById('answer').value = "";
        window.alert('Ne! Zkus to znovu!');
    }
}