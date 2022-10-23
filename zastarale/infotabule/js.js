document.getElementById("Reset").setAttribute("disabled", true);

function Vygenerovat() {
    document.getElementById("Reset").setAttribute("enabled", true);
    ////////////////////////////////////////////////
    //Vlak1
    var spoj1 = Math.floor(Math.random() *9+1)
    if (spoj1 == 1) {
        spoj1 = "SC";
    }
    if (spoj1 == 2) {
        spoj1 = "EC";
    }
    if (spoj1 == 3) {
        spoj1 = "IC";
    }
    if (spoj1 == 4) {
        spoj1 = "R";
    }
    if (spoj1 == 5) {
        spoj1 = "Ex";
    }
    if (spoj1 == 6) {
        spoj1 = "Sp";
    }
    if (spoj1 == 7) {
        spoj1 = "Os";
    }
    if (spoj1 == 8) {
        spoj1 = "RJ";
    }
    if (spoj1 == 9) {
        spoj1 = "LE";
    }
    var cislo1 = Math.floor(Math.random() *9998+1);
    var kam1 = Math.floor(Math.random() *20+1);
    if (kam1 == 1) {
        kam1 = "Praha";
    }
    if (kam1 == 2) {
        kam1 = "Ostrava";
    }
    if (kam1 == 3) {
        kam1 = "Plzeň";
    }
    if (kam1 == 4) {
        kam1 = "Zlín";
    }
    if (kam1 == 5) {
        kam1 = "Karlovy Vary";
    }
    if (kam1 == 6) {
        kam1 = "Liberec";
    }
    if (kam1 == 7) {
        kam1 = "Hradec Králové";
    }
    if (kam1 == 8) {
        kam1 = "Pardubice";
    }
    if (kam1 == 9) {
        kam1 = "Olomouc";
    }
    if (kam1 == 10) {
        kam1 = "České Budějovice";
    }
    if (kam1 == 11) {
        kam1 = "Jihlava";
    }
    if (kam1 == 12) {
        kam1 = "Ústí nad Labem";
    }
    if (kam1 == 13) {
        kam1 = "Bratislava";
    }
    if (kam1 == 14) {
        kam1 = "Wien HBF";
    }
    if (kam1 == 15) {
        kam1 = "Berlin HBF";
    }
    if (kam1 == 16) {
        kam1 = "Warszawa";
    }
    if (kam1 == 17) {
        kam1 = "Opava";
    }
    if (kam1 == 18) {
        kam1 = "Děčín";
    }
    if (kam1 == 19) {
        kam1 = "Hlučín";
    }
    if (kam1 == 20) {
        kam1 = "Český Těšín";
    }
    var odjezd11 = Math.floor(Math.random() *5 + 1);
    var odjezd12 = Math.floor(Math.random() *60 + 1);
    if (odjezd12 == 60) {
        odjezd12 = "00";
    }
    if (odjezd12 == 1 || odjezd12 == "1") {
        odjezd12 = "01";
    }
    if (odjezd12 == 2 || odjezd12 == "2") {
        odjezd12 = "02";
    }
    if (odjezd12 == 3 || odjezd12 == "3") {
        odjezd12 = "03";
    }
    if (odjezd12 == 4 || odjezd12 == "4") {
        odjezd12 = "04";
    }
    if (odjezd12 == 5 || odjezd12 == "5") {
        odjezd12 = "05";
    }
    if (odjezd12 == 6 || odjezd12 == "6") {
        odjezd12 = "06";
    }
    if (odjezd12 == 7 || odjezd12 == "7") {
        odjezd12 = "07";
    }
    if (odjezd12 == 8 || odjezd12 == "8") {
        odjezd12 = "08";
    }
    if (odjezd12 == 9 || odjezd12 == "9") {
        odjezd12 = "09";
    }
    var odjezd1 = odjezd11 + ":" + odjezd12;
    document.getElementById("spoj1").innerText = spoj1;
    document.getElementById("cislo1").innerText = cislo1;
    document.getElementById("kam1").innerText = kam1;
    document.getElementById("odjezd1").innerText = odjezd1;
    //////////////////////////////////////////////////////////
    //Vlak2
    var spoj2 = Math.floor(Math.random() *9+1)
    if (spoj2 == 1) {
        spoj2 = "SC";
    }
    if (spoj2 == 2) {
        spoj2 = "EC";
    }
    if (spoj2 == 3) {
        spoj2 = "IC";
    }
    if (spoj2 == 4) {
        spoj2 = "R";
    }
    if (spoj2 == 5) {
        spoj2 = "Ex";
    }
    if (spoj2 == 6) {
        spoj2 = "Sp";
    }
    if (spoj2 == 7) {
        spoj2 = "Os";
    }
    if (spoj2 == 8) {
        spoj2 = "RJ";
    }
    if (spoj2 == 9) {
        spoj2 = "LE";
    }
    var cislo2 = Math.floor(Math.random() *9998+1);
    var kam2 = Math.floor(Math.random() *20+1);
    if (kam2 == 1) {
        kam2 = "Praha";
    }
    if (kam2 == 2) {
        kam2 = "Ostrava";
    }
    if (kam2 == 3) {
        kam2 = "Plzeň";
    }
    if (kam2 == 4) {
        kam2 = "Zlín";
    }
    if (kam2 == 5) {
        kam2 = "Karlovy Vary";
    }
    if (kam2 == 6) {
        kam2 = "Liberec";
    }
    if (kam2 == 7) {
        kam2 = "Hradec Králové";
    }
    if (kam2 == 8) {
        kam2 = "Pardubice";
    }
    if (kam2 == 9) {
        kam2 = "Olomouc";
    }
    if (kam2 == 10) {
        kam2 = "České Budějovice";
    }
    if (kam2 == 11) {
        kam2 = "Jihlava";
    }
    if (kam2 == 12) {
        kam2 = "Ústí nad Labem";
    }
    if (kam2 == 13) {
        kam2 = "Bratislava";
    }
    if (kam2 == 14) {
        kam2 = "Wien HBF";
    }
    if (kam2 == 15) {
        kam2 = "Berlin HBF";
    }
    if (kam2 == 16) {
        kam2 = "Warszawa";
    }
    if (kam2 == 17) {
        kam2 = "Opava";
    }
    if (kam2 == 18) {
        kam2 = "Děčín";
    }
    if (kam2 == 19) {
        kam2 = "Hlučín";
    }
    if (kam2 == 20) {
        kam2 = "Český Těšín";
    }
    var odjezd21 = Math.floor(Math.random() *10 + 1);
    if (odjezd21 <= 5) {
        odjezd21 += 5;
    }
    var odjezd22 = Math.floor(Math.random() *60 + 1);
    if (odjezd22 == 60) {
        odjezd22 = "00";
    }
    if (odjezd22 == 1 || odjezd22 == "1") {
        odjezd22 = "01";
    }
    if (odjezd22 == 2 || odjezd22 == "2") {
        odjezd22 = "02";
    }
    if (odjezd22 == 3 || odjezd22 == "3") {
        odjezd22 = "03";
    }
    if (odjezd22 == 4 || odjezd22 == "4") {
        odjezd22 = "04";
    }
    if (odjezd22 == 5 || odjezd22 == "5") {
        odjezd22 = "05";
    }
    if (odjezd22 == 6 || odjezd22 == "6") {
        odjezd22 = "06";
    }
    if (odjezd22 == 7 || odjezd22 == "7") {
        odjezd22 = "07";
    }
    if (odjezd22 == 8 || odjezd22 == "8") {
        odjezd22 = "08";
    }
    if (odjezd22 == 9 || odjezd22 == "9") {
        odjezd22 = "09";
    }
    var odjezd2 = odjezd21 + ":" + odjezd22;
    document.getElementById("spoj2").innerText = spoj2;
    document.getElementById("cislo2").innerText = cislo2;
    document.getElementById("kam2").innerText = kam2;
    document.getElementById("odjezd2").innerText = odjezd2;
    //////////////////////////////////////////////////////
    //Vlak3
    var spoj3 = Math.floor(Math.random() *9+1)
    if (spoj3 == 1) {
        spoj3 = "SC";
    }
    if (spoj3 == 2) {
        spoj3 = "EC";
    }
    if (spoj3 == 3) {
        spoj3 = "IC";
    }
    if (spoj3 == 4) {
        spoj3 = "R";
    }
    if (spoj3 == 5) {
        spoj3 = "Ex";
    }
    if (spoj3 == 6) {
        spoj3 = "Sp";
    }
    if (spoj3 == 7) {
        spoj3 = "Os";
    }
    if (spoj3 == 8) {
        spoj3 = "RJ";
    }
    if (spoj3 == 9) {
        spoj3 = "LE";
    }
    var cislo3 = Math.floor(Math.random() *9998+1);
    var kam3 = Math.floor(Math.random() *20+1);
    if (kam3 == 1) {
        kam3 = "Praha";
    }
    if (kam3 == 2) {
        kam3 = "Ostrava";
    }
    if (kam3 == 3) {
        kam3 = "Plzeň";
    }
    if (kam3 == 4) {
        kam3 = "Zlín";
    }
    if (kam3 == 5) {
        kam3 = "Karlovy Vary";
    }
    if (kam3 == 6) {
        kam3 = "Liberec";
    }
    if (kam3 == 7) {
        kam3 = "Hradec Králové";
    }
    if (kam3 == 8) {
        kam3 = "Pardubice";
    }
    if (kam3 == 9) {
        kam3 = "Olomouc";
    }
    if (kam3 == 10) {
        kam3 = "České Budějovice";
    }
    if (kam3 == 11) {
        kam3 = "Jihlava";
    }
    if (kam3 == 12) {
        kam3 = "Ústí nad Labem";
    }
    if (kam3 == 13) {
        kam3 = "Bratislava";
    }
    if (kam3 == 14) {
        kam3 = "Wien HBF";
    }
    if (kam3 == 15) {
        kam3 = "Berlin HBF";
    }
    if (kam3 == 16) {
        kam3 = "Warszawa";
    }
    if (kam3 == 17) {
        kam3 = "Opava";
    }
    if (kam3 == 18) {
        kam3 = "Děčín";
    }
    if (kam3 == 19) {
        kam3 = "Hlučín";
    }
    if (kam3 == 20) {
        kam3 = "Český Těšín";
    }
    var odjezd31 = Math.floor(Math.random() *17 + 1);
    if (odjezd31 <= 10) {
        odjezd31 += 10;
        if (odjezd31 >= 18) {
            var randomnumber = Math.floor(Math.random() *7+1)
            if (randomnumber == 1) {
                odjezd31 = 17; 
            }
            if (randomnumber == 2) {
                odjezd31 = 16; 
            }
            if (randomnumber == 3) {
                odjezd31 = 15;
            }
            if (randomnumber == 4) {
                odjezd31 = 14;
            }
            if (randomnumber == 5) {
                odjezd31 = 13;
            }
            if (randomnumber == 6) {
                odjezd31 = 12;
            }
            if (randomnumber == 7) {
                odjezd31 = 11; 
            }
        }
    }
    var odjezd32 = Math.floor(Math.random() *60 + 1);
    if (odjezd32 == 60) {
        odjezd32 = "00";
    }
    if (odjezd32 == 1 || odjezd32 == "1") {
        odjezd32 = "01";
    }
    if (odjezd32 == 2 || odjezd32 == "2") {
        odjezd32 = "02";
    }
    if (odjezd32 == 3 || odjezd32 == "3") {
        odjezd32 = "03";
    }
    if (odjezd32 == 4 || odjezd32 == "4") {
        odjezd32 = "04";
    }
    if (odjezd32 == 5 || odjezd32 == "5") {
        odjezd32 = "05";
    }
    if (odjezd32 == 6 || odjezd32 == "6") {
        odjezd32 = "06";
    }
    if (odjezd32 == 7 || odjezd32 == "7") {
        odjezd32 = "07";
    }
    if (odjezd32 == 8 || odjezd32 == "8") {
        odjezd32 = "08";
    }
    if (odjezd32 == 9 || odjezd32 == "9") {
        odjezd32 = "09";
    }
    var odjezd3 = odjezd31 + ":" + odjezd32;
    document.getElementById("spoj3").innerText = spoj3;
    document.getElementById("cislo3").innerText = cislo3;
    document.getElementById("kam3").innerText = kam3;
    document.getElementById("odjezd3").innerText = odjezd3;
    ////////////////////////////////////////////////////////////////
    //Vlak4
    var spoj4 = Math.floor(Math.random() *9+1)
    if (spoj4 == 1) {
        spoj4 = "SC";
    }
    if (spoj4 == 2) {
        spoj4 = "EC";
    }
    if (spoj4 == 3) {
        spoj4 = "IC";
    }
    if (spoj4 == 4) {
        spoj4 = "R";
    }
    if (spoj4 == 5) {
        spoj4 = "Ex";
    }
    if (spoj4 == 6) {
        spoj4 = "Sp";
    }
    if (spoj4 == 7) {
        spoj4 = "Os";
    }
    if (spoj4 == 8) {
        spoj4 = "RJ";
    }
    if (spoj4 == 9) {
        spoj4 = "LE";
    }
    var cislo4 = Math.floor(Math.random() *9998+1);
    var kam4 = Math.floor(Math.random() *20+1);
    if (kam4 == 1) {
        kam4 = "Praha";
    }
    if (kam4 == 2) {
        kam4 = "Ostrava";
    }
    if (kam4 == 3) {
        kam4 = "Plzeň";
    }
    if (kam4 == 4) {
        kam4 = "Zlín";
    }
    if (kam4 == 5) {
        kam4 = "Karlovy Vary";
    }
    if (kam4 == 6) {
        kam4 = "Liberec";
    }
    if (kam4 == 7) {
        kam4 = "Hradec Králové";
    }
    if (kam4 == 8) {
        kam4 = "Pardubice";
    }
    if (kam4 == 9) {
        kam4 = "Olomouc";
    }
    if (kam4 == 10) {
        kam4 = "České Budějovice";
    }
    if (kam4 == 11) {
        kam4 = "Jihlava";
    }
    if (kam4 == 12) {
        kam4 = "Ústí nad Labem";
    }
    if (kam4 == 13) {
        kam4 = "Bratislava";
    }
    if (kam4 == 14) {
        kam4 = "Wien HBF";
    }
    if (kam4 == 15) {
        kam4 = "Berlin HBF";
    }
    if (kam4 == 16) {
        kam4 = "Warszawa";
    }
    if (kam4 == 17) {
        kam4 = "Opava";
    }
    if (kam4 == 18) {
        kam4 = "Děčín";
    }
    if (kam4 == 19) {
        kam4 = "Hlučín";
    }
    if (kam4 == 20) {
        kam4 = "Český Těšín";
    }
    var odjezd41 = Math.floor(Math.random() *24 + 1);
    if (odjezd41 <= 17) {
        odjezd41 += 17;
        if (odjezd41 >= 24) {
            odjezd41 = 23;
        }
    }
    if (odjezd41 == 24) {
        odjezd41 = "0";
    }
    var odjezd42 = Math.floor(Math.random() *60 + 1);
    if (odjezd42 == 60) {
        odjezd42 = "00";
    }
    if (odjezd42 == 1 || odjezd42 == "1") {
        odjezd42 = "01";
    }
    if (odjezd42 == 2 || odjezd42 == "2") {
        odjezd42 = "02";
    }
    if (odjezd42 == 3 || odjezd42 == "3") {
        odjezd42 = "03";
    }
    if (odjezd42 == 4 || odjezd42 == "4") {
        odjezd42 = "04";
    }
    if (odjezd42 == 5 || odjezd42 == "5") {
        odjezd42 = "05";
    }
    if (odjezd42 == 6 || odjezd42 == "6") {
        odjezd42 = "06";
    }
    if (odjezd42 == 7 || odjezd42 == "7") {
        odjezd42 = "07";
    }
    if (odjezd42 == 8 || odjezd42 == "8") {
        odjezd42 = "08";
    }
    if (odjezd42 == 9 || odjezd42 == "9") {
        odjezd42 = "09";
    }
    var odjezd4 = odjezd41 + ":" + odjezd42;
    document.getElementById("spoj4").innerText = spoj4;
    document.getElementById("cislo4").innerText = cislo4;
    document.getElementById("kam4").innerText = kam4;
    document.getElementById("odjezd4").innerText = odjezd4;
}


function Reset() {
    document.getElementById("spoj1").innerText = "-";
    document.getElementById("cislo1").innerText = "-";
    document.getElementById("kam1").innerText = "-";
    document.getElementById("odjezd1").innerText = "-";
    document.getElementById("spoj2").innerText = "-";
    document.getElementById("cislo2").innerText = "-";
    document.getElementById("kam2").innerText = "-";
    document.getElementById("odjezd2").innerText = "-";
    document.getElementById("spoj3").innerText = "-";
    document.getElementById("cislo3").innerText = "-";
    document.getElementById("kam3").innerText = "-";
    document.getElementById("odjezd3").innerText = "-";
    document.getElementById("spoj4").innerText = "-";
    document.getElementById("cislo4").innerText = "-";
    document.getElementById("kam4").innerText = "-";
    document.getElementById("odjezd4").innerText = "-";
}