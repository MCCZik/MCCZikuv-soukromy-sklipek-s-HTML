//Basic proměnné
var Interval = setInterval(DěláníVěci, (1000/30))
var money = 0;
var dollar = 0;
var hotovo = 0;
var uděláno = 0;
var level = 1;


//On/Off čekání proměnná
var tfw = "false";


//Upgrade proměnné
var upmone = 0;
var upwor = 0;
var wait = 0;
var money3 = 300;
var money2 = 200;
var money1 = 100;
var upmoney = 1000;
var upwork = 10000;
var chotovo = 0.01;
var nhotovo = 0.04;
var nuděláno = 50;


//Achievment proměnné
var ac1 = "true";
var ac2 = "true";
var ac3 = "true";
var ac4 = "true";
var ac5 = "true";
var ac6 = "true";


function DěláníVěci() {
    if (wait >= 1) {
        wait = 0;
        tfw = "false";
        document.getElementById("info").innerText = "";
        document.getElementById("infos").innerText = "";
    }
    if (tfw == "true") {
        wait += 0.0001;
    }
    hotovo += nhotovo;
    document.getElementById("money").innerHTML = money + "€";
    document.getElementById("dollar").innerHTML = dollar + "$";
    document.getElementById("hotovo").innerHTML = uděláno + "/" + nuděláno +"ks";
    document.getElementById("level").innerHTML = level + " lvl";
}

function Vybrat() {
    if (uděláno >= nuděláno) {
        level += 1;
        hotovo = 0;
        uděláno = 0;
        nhotovo -= chotovo;
        nuděláno += 75;

    }
    if (hotovo >= 1) {
        if (hotovo >= 2) {
            if (hotovo >= 3) {
                uděláno += 3;
                hotovo -= 3;
                dollar += 3;
                money += money3;
            }
            hotovo -= 2;
            uděláno += 2;
            dollar += 2;
            money += money2;
        }
        hotovo -= 1;
        uděláno += 1;
        dollar += 1;
        money += money1;
    }
}


function UpgradeWorkers() {
    if (money <= -10000) {
        window.alert("Zbankrotoval jsi, měl jsi moc velký dluh v penězích, přesněji" + money + "€!");
    }
    money -= upwork;
    upwor += 1;
    chotovo += 0.002;
    upwork += 35000;
    document.getElementById("money").innerHTML = money + "€";
    document.getElementById("costupwork").innerHTML = upwork + "€";
}

function UpgradeMoney() {
    if (dollar <= -1000) {
        window.alert("Zbankrotoval jsi, měl jsi moc velký dluh u dolarů, přesněji" + dollar + "$!");
    }
    dollar -= upmoney;
    upmone += 1;
    money1 += 150;
    money2 += 300;
    money3 += 450;
    upmoney += 3000;
    document.getElementById("dollar").innerHTML = dollar + "$";
    document.getElementById("costupmoney").innerHTML = upmoney + "$";
}


if (upmone == 1 || upwor == 1) {
    if (ac1 == "true") {
        ac1 = "false";
        document.getElementById("info").innerText = "Achievment get!";
        document.getElementById("infos").innerText = "První vylepšení!";
        tfw = "true";
    }
}
if (upmone == 10 || upwor == 10) {
    if (ac2 == "true") {
        ac2 = "false";
        document.getElementById("info").innerText = "Achievment get!";
        document.getElementById("infos").innerText = "Dvacet koupených vylepšení!";
        tfw = "true";
    }
}
if (money == 1000) {
    if (ac3 == "true") {
    ac3 = "false";
    document.getElementById("info").innerText = "Achievment get!";
    document.getElementById("infos").innerText = "První tisícovka!";
    tfw = "true";          
    }
}
if (money == 10000) {
    if (ac4 == "true") {
    ac4 = "false";
    document.getElementById("info").innerText = "Achievment get!";
    document.getElementById("infos").innerText = "Deset tisíc Love!";
    tfw = "true";          
    }
}
if (money == 1000000) {
    if (ac5 == "true") {
    ac5 = "false";
    document.getElementById("info").innerText = "Achievment get!";
    document.getElementById("infos").innerText = "Milionář!";
    tfw = "true";          
    }
}
if (dollar == 100) {
    if (ac6 == "true") {
    ac6 = "false";
    document.getElementById("info").innerText = "Achievment get!";
    document.getElementById("infos").innerText = "První dolárky!";
    tfw = "true";          
    }
}
if (dollar == 100000) {
    if (ac6 == "true") {
    ac6 = "false";
    document.getElementById("info").innerText = "Achievment get!";
    document.getElementById("infos").innerText = "Money, money, money, must be funny!";
    tfw = "true";          
    }
}