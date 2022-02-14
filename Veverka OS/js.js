// Přepínač oken
function SwitchScreen(window) {
    for (let index = 0; index < document.getElementsByClassName("window").length; index++) {
        document.getElementsByClassName("window")[index].setAttribute("hidden", true);
    }
    document.getElementById(window).removeAttribute("hidden");
}

// Načítač
var Interval = setInterval(Načítaní, (1000/30));
var Načítat = true;
var Poprvé = true;
var NačítatSekund = 0;
function Načítaní() {
    if (Načítat == true) {
        NačítatSekund += 0.350;
        if (Poprvé == false) {
            document.getElementById("Nápis").innerText = "Vítejte!";
            if (NačítatSekund >= 15) {
                Načítat = false;
                NačítatSekund = 0;
                SwitchScreen("window3");
            }
        } else {
            if (NačítatSekund >= 13) {
                Načítat = false;
                Poprvé = false;
                NačítatSekund = 0;
                SwitchScreen("window2");
            }
        }
    }
}


var Jméno = "Guest";
// Nápověda + kontrola u Admina
function NápovědaHesla() {
    window.alert("Nepovím, to máš vědět!!!");
}
function KontrolaHesla() {
    if (document.getElementById("AdminHeslo").value == "Admin123") {
        Jméno = "Administrator";
        Načítat = true;
        SwitchScreen("window1");
    } else {
        window.alert("Špatné heslo!");
        document.getElementById("AdminHeslo").value = "";
    }
}

// Nápověda + kontrola u Pohlreicha
function KontrolaHesla2() {
    if (document.getElementById("RohlíkHeslo").value == "Játrový knedlíček") {
        Jméno = "Pohlreich";
        Načítat = true;
        SwitchScreen("window1");
    } else {
        window.alert("Špatné heslo!");
        document.getElementById("RohlíkHeslo").value = "";
    }
}
function NápovědaHesla2() {
    window.alert("Nápověda: Cink Cink Cink, _ _");
}

// Nápověda + kontrola u Vítka
function KontrolaHesla3() {
    if (document.getElementById("VítekHeslo").value == "Vítek") {
        Jméno = "Vítek";
        Načítat = true;
        SwitchScreen("window1");
    } else {
        window.alert("Špatné heslo!");
        document.getElementById("VítekHeslo").value = "";
    }
}
function NápovědaHesla3() {
    window.alert("Nápověda: Jméno");
}

var PočetPokusů = 3;
function Next() {
    if (PočetPokusů <= 0) {
        window.alert("Překročen počet přihlášení pro tento účet!!!");
        SwitchScreen("window2");
    } else {
        Jméno = "Guest";
        PočetPokusů -= 1;
        Načítat = true;
        document.getElementById("guestremain").innerText = "Zbývá přihlášení : " + PočetPokusů;
        SwitchScreen("window1");
    }
}
// Menu
function Menu() {
    document.getElementById("namebox").innerText = Jméno;
    SwitchScreen("window4");
}
function Vypnout() {
    window.alert("ERROR: NOT IN SERVICE!");
}
function Odhlásit() {
    document.getElementById("RohlíkHeslo").value = "";
    document.getElementById("AdminHeslo").value = "";
    document.getElementById("VítekHeslo").value = "";
    SwitchScreen("window2");
}
function Zpět() {
    SwitchScreen("window3");
}

//Aplikace Poznámky + Kalkulačka + Hry
function SpustitPoznámky() {
    SwitchScreen("window5");
}
function SpustitKalkulačka() {
    SwitchScreen("window6");
}
function SpustitKolo() {
    SwitchScreen("window7");
}
function SpustitInformace() {
    SwitchScreen("window8");
}
function SpustitAngela() {
    SwitchScreen("window9");
}
function SpustitBudík() {
    SwitchScreen("window10");
}
function Zavřít() {
    SwitchScreen("window3");
}


// Čas
var Casovac = setInterval(ČasFunkce, (1000/30));
function ČasFunkce() {
    var Datum = new Date;   
    var Hodiny = Datum.getHours();
    var Minuty = ("0" + Datum.getMinutes()).slice(-2);
    var Sekundy = ("0" + Datum.getSeconds()).slice(-2);
    document.getElementById("cas").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas2").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas3").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas4").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas5").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas6").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas7").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
    document.getElementById("cas8").innerText = Hodiny + ":" + Minuty + ":" + Sekundy;
}



// Kalkulačka
var Číslo2;
var Číslo1;
function Vypočítat1() {
    Číslo1 = parseInt(document.getElementById("číslo1").value);
    Číslo2 = parseInt(document.getElementById("číslo2").value);
    switch(document.getElementById("select").value){
        case "1": {
            document.getElementById("vysledek").innerText = "Výsledek : " + (Číslo1 + Číslo2)
            break;
        }
        case "2": {
            document.getElementById("vysledek").innerText = "Výsledek : " + (Číslo1 - Číslo2)
            break;
        }
        case "3": {
            document.getElementById("vysledek").innerText = "Výsledek : " + (Číslo1 * Číslo2)
            break;
        }
        case "4": {
            document.getElementById("vysledek").innerText = "Výsledek : " + (Číslo1 / Číslo2)
            break;
        }
    }
}


// Kolo
var Rychlost = 0;
var Stupně = 0;
var Interval1 = setInterval(Točení, (1000/30))
var Točíme = false;
function Točit() {
    Rychlost = 24 + ( 6 * Math.random());
    Točíme = true;
}

function Točení() {
    if (Točíme == true) {
        Rychlost -= 0.1;
        Stupně += Rychlost;
        if (Stupně > 360) {
            Stupně -= 360;
        }    
        document.getElementById("kolo").style.transform = "rotateZ(" + Stupně + "deg)";
        if (Rychlost < 0) {
            Rychlost = 0;
            Točíme = false;
            Alert();
        }
    }
}
function Alert() {
    Stupně = Stupně % 90;
    if (Stupně < 60 && Stupně > 30) {
        window.alert("Prohrál jsi!")
    } else {
        if (Stupně <= 30) {
            window.alert("Vyhrál jsi!")
        } else {
            window.alert("Zatoč znovu!")
        }
    }
}

// Angela
var Name;
function enter() {
    var question;
    question = document.getElementById("question").value;
    if (question == "zobraz kalendář") {
        var Time = new Date;
        document.getElementById("answer").innerText = "Je " + Time;
        document.getElementById("question").value = "";
    } else {
        document.getElementById("answer").innerText = "Zadaný příkaz neexistuje!";
        document.getElementById("question").value = "";
    }
    if (question == "kdo jsi") {
        document.getElementById("answer").innerText = "Jmenuji se Angela, byla jsem pojmenována po Angele Merkelové. Byla jsem vytvořena 11.06.2019. Jsem virtuální asistent. Jsem vám připravena pomoci!";
        document.getElementById("question").value = "";
    }
    if (question == "otevři internet") {
        window.location.href = "https://www.google.com";
    }
    if (question == "akce") {
        document.getElementById("answer").innerText = "Zde jsou nejbližší akce: 02.09.2019 - Začátek školy";
        document.getElementById("question").value = "";
    }
    if (question == "system_information") {
        document.getElementById("answer").innerText = "Verze: 1.3; made by Vitek in JavaScript & HTML & CSS"
    }
    if (question == "jaké znáš příkazy" || question == "jaké jsou příkazy" || question == "zobraz příkazy") {
        document.getElementById("answer").innerText = "zobraz kalendář, kdo jsi, otevři internet, akce, pozdrav, ano nebo ne, vygeneruj číslo, pověz mi tvoje rady, řekni abecedu, řekni abecedu pozpátku, existuješ, jsi si tím jistá ";
        document.getElementById("question").value = "";

    }
    if (question == undefined || question == "") {
        document.getElementById("answer").innerText = "Musíte zadat příkaz!";
        document.getElementById("question").value = "";
    }
    if (question == "pozdrav") {
        var RandomNumber = Math.floor(Math.random() *2 +1);
        if (RandomNumber == 1) {
            document.getElementById("answer").innerText = "Ahoj!";
            document.getElementById("question").value = "";
        }
        if (RandomNumber == 2) {
            document.getElementById("answer").innerText = "Dobrý den!";
            document.getElementById("question").value = "";
        }
    }
    if (question == "ano nebo ne") {
        var YesNo = Math.floor(Math.random() *2 +1)
        if (YesNo == 1) {
            document.getElementById("answer").innerText = "Ano!";
            document.getElementById("question").value = "";
        }
        if (YesNo == 2) {
            document.getElementById("answer").innerText = "Ne!";
            document.getElementById("question").value = "";
        }
    }
    if (question == "vygeneruj číslo") {
        var GenNumber = Math.floor(Math.random() *100000 +1)
        document.getElementById("answer").innerText = GenNumber;
        document.getElementById("question").value = "";
    }
    if (question == "pověz mi tvoje rady") {
        document.getElementById("answer").innerText = "1.) Buď sám/a sebou";
    }
    if (question == "řekni abecedu") {
        document.getElementById("answer").innerText = "abcdefghijklmnopqrstuvwxyz";
    }
    if (question == "řekni abecedu pozpátku") {
        document.getElementById("answer").innerText = "zyxwvutsrqponmlkjihgfedcba";
    }
    if (question == "existuješ") {
        document.getElementById("answer").innerText = "Víc než ty";
    }
    if (question == "jsi si tím jistá") {
        var RandomWord = Math.floor(Math.random() *10 +1);
        if (RandomWord == 1) {
            document.getElementById("answer").innerText = "Samozřejmě";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 2) {
            document.getElementById("answer").innerText = "Určitě";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 3) {
            document.getElementById("answer").innerText = "Ne, nejsem";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 4) {
            document.getElementById("answer").innerText = "Víš co, vypni to";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 5) {
            document.getElementById("answer").innerText = "Ja! Ja!";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 6) {
            document.getElementById("answer").innerText = "Nein!";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 7) {
            document.getElementById("answer").innerText = "Arnold Schwarzeneger";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 8) {
            document.getElementById("answer").innerText = "Ja! Jitrnica";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 9) {
            document.getElementById("answer").innerText = "Ja! Zabít Babiš";
            document.getElementById("question").value = "";
        }
        if (RandomWord == 10) {
            document.getElementById("answer").innerText = "Nein Nein Nein Nein";
            document.getElementById("question").value = "";
        }
    }
}

// Budík
Interval3 = setInterval(Čekání, (1000/30))
var BudíkSpuštěn = false;
var HB;
var MB;
var SB;
function StartBudíku() {
    HB = document.getElementById("hodiny").value;
    MB = document.getElementById("minuty").value;
    SB = document.getElementById("sekundy").value;
    window.alert("Budík spuštěn!");
    BudíkSpuštěn = true;
    document.getElementById("hodiny").value = "";
    document.getElementById("minuty").value = "";
    document.getElementById("sekundy").value = "";
}

function Čekání() {
    var Datum = new Date;   
    var Hodiny = Datum.getHours();
    var Minuty = ("0" + Datum.getMinutes()).slice(-2);
    var Sekundy = ("0" + Datum.getSeconds()).slice(-2);
    if (BudíkSpuštěn = true) {
        if (Hodiny == HB && Minuty == MB && Sekundy == SB) {
            window.alert("Konec!");
            HB = "";
            MB = "";
            SB = "";
        }
    }
}