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
        document.getElementById("answer").innerText = "Zde jsou nejbližší akce: 14.06.2019 - Uzávěr známek; 25.06.2019 - Vysvědčení";
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