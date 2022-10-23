const Content = {
    "murloc":{
        "MaxHealth":150,
        "Defence":0.03,
        "Attack":15
    },
    "troll":{
        "MaxHealth":20,
        "Defence":0.06,
        "Attack":50
    },
    "dragon":{
        "MaxHealth":300,
        "Defence":0.2,
        "Attack":120
    },
    "pohlreich":{
        "MaxHealth":500,
        "Defence":0.9,
        "Attack":400
    }
}
var Save;
var Time;
var MHealth = 150;
var THealth = 20;
var DHealth = 300;
var PHealth = 500;


function Init() {
    SwitchScreen("window1");
    if (localStorage.Save == undefined || localStorage.Save == "" || localStorage.Save == "{}" || localStorage.Save == "object Osbject") {
        document.getElementById("button1").setAttribute("disabled", true);
    }
}




function NewGame() {
    SwitchScreen("window2");
}


function LoadGame() {
    Save = JSON.parse(localStorage.Save);
    UpDateInfo();
    SwitchScreen("window3");
}


function Home() {
    SwitchScreen("window1");
}


function Home1() {
    SwitchScreen("window1");
}


function SaveGame() {
    localStorage.Save = JSON.stringify(Save);
}




function SwitchScreen(window) {
    for (let index = 0; index < document.getElementsByClassName("window").length; index++) {
        document.getElementsByClassName("window")[index].setAttribute("hidden", true);
    }
    document.getElementById(window).removeAttribute("hidden");
}




function StartGame() {
    Save = {};
    Save.Name = document.getElementById("playername").value;
    Save.Race = document.getElementById("playerrace").value;
    switch (document.getElementById("playerrace").value) {
        case "human": {
            Save.MaxHealth = 250;
            Save.Defence = 0.05;
            Save.Attack = 25;
            break;
        }
        case "elf": {
            Save.MaxHealth = 200;
            Save.Defence = 0.04;
            Save.Attack = 40;
            break;
        }
        case "obr": {
            Save.MaxHealth = 300;
            Save.Defence = 0.08;
            Save.Attack = 18;
            break;
        }
        default: break;
    }
    Save.Gold = 50;
    UpDateInfo();
    SwitchScreen("window3");
}




function UpDateInfo() {
    MHealth = 175;
    THealth = 30;
    DHealth = 305;
    PHealth = 502.5;
    document.getElementById("stats_name").innerText = "Jméno : " + Save.Name;
    document.getElementById("stats_hp").innerText = "Životy : " + Save.MaxHealth;
    document.getElementById("stats_atk").innerText = "Útok : " + Save.Attack;
    document.getElementById("stats_def").innerText = "Obrana : " + Save.Defence;
    document.getElementById("stats_gold").innerText = "Zlato : " + Save.Gold;
}




function DeleteGame() {
    Save = {};
    Save.Name = {};
    Save.Race = {};
    SaveGame();
    UpDateInfo();
    SwitchScreen("window1");
}




function Instructions() {
    SwitchScreen("window4");
}




var RndmNmbr;
function Fight(Kdo) {
    RndmNmbr = Math.min(1);
    RndmNmbr = Math.max(4);
    if (RndmNmbr == 1) {
        SwitchScreen("window5");
    }
    if (RndmNmbr == 2) {
        SwitchScreen("window6");
    }
    if (RndmNmbr == 3) {
        SwitchScreen("window7");
    }
    if (RndmNmbr == 4) {
        SwitchScreen("window7");
    }
}




function MurlocHit() {
    if (MHealth == 0) {
        Save.Gold += 100;
        UpDateInfo();
        SwitchScreen("window3");
    }
    if (MHealth == 150) {
        MHealth -= 15;
    } else {
        if (MHealth <= 135) {
            MHealth -= 15;
        }
    }
    document.getElementById("mhp").innerText = "Murloc : " + MHealth + " hp";
}




function TrollHit() {
    if (THealth == 0) {
        Save.Gold += 50;
        UpDateInfo();
        SwitchScreen("window3");
    }
    if (THealth == 20) {
        THealth -= 10;
    } else {
        if (THealth <= 10) {
            THealth -= 10;
        }
    }
    document.getElementById("thp").innerText = "Troll : " + THealth + " hp";
}




function DragonHit() {
    if (DHealth == 0) {
        Save.Gold += 1000;
        UpDateInfo();
        SwitchScreen("window3");
    }
    if (DHealth == 300) {
        DHealth -= 5;
    } else {
        if (DHealth <= 295) {
            DHealth -= 5;
        }
    }
    document.getElementById("dhp").innerText = "Drak : " + DHealth + " hp";
}




function PohlreichHit() {
    if (PHealth == 0) {
        Save.Gold += 10000;
        UpDateInfo();
        SwitchScreen("window3");
    }
    if (PHealth == 500) {
        PHealth -= 2.5;
    } else {
        if (PHealth <= 499) {
            PHealth -= 2.5;
        }
    }
    document.getElementById("php").innerText = "Pohlreich : " + PHealth + " hp";
}