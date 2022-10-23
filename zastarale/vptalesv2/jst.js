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
var MaxHealth;
var Health;
var StartPohlreich = 0;
var EndHP;

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
    Save.Health += EndHP;
    SwitchScreen("window3");
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
            Save.Health = 250;
            Save.Attack = 25;
            document.getElementById("hhp").innerText = Save.Health + " hp";
            break;
        }
        case "elf": {
            Save.MaxHealth = 200;
            Save.Defence = 0.04;
            Save.Health = 200;
            Save.Attack = 40;
            document.getElementById("hhp").innerText = Save.Health + " hp";
            break;
        }
        case "obr": {
            Save.MaxHealth = 300;
            Save.Defence = 0.08;
            Save.Health = 300;
            Save.Attack = 18;
            document.getElementById("hhp").innerText = Save.Health + " hp";
            break;
        }
        default: break;
    }
    Save.Gold = 50;
    UpDateInfo();
    SwitchScreen("window3");
}




function UpDateInfo() {
    localStorage.Save = JSON.stringify(Save);
    MHealth = 150;
    THealth = 20;
    DHealth = 300;
    PHealth = 500;
    document.getElementById("stats_name").innerText = "Jméno : " + Save.Name;
    document.getElementById("stats_hp").innerText = "Životy : " + Save.Health;
    document.getElementById("stats_atk").innerText = "Útok : " + Save.Attack;
    document.getElementById("stats_def").innerText = "Obrana : " + Save.Defence;
    document.getElementById("stats_gold").innerText = "Zlato : " + Save.Gold;
    document.getElementById("stats_gold1").innerText = "Zlato : " + Save.Gold;
}




function DeleteGame() {
    var yn = window.prompt("Pokud si nejste jisti, napište: NE; Pokud si jste opravdu jisti, napište: ANO");
    if (yn == "NE" || yn == "ne" || yn == "Ne" || yn == "nE") {
        SwitchScreen("window3");
    } else {
        Save = "{}";
        Save.Name = "{}";
        Save.Race = "{}";
        SaveGame();
        UpDateInfo();
        SwitchScreen("window1");
    }
}




function Instructions() {
    SwitchScreen("window4");
}




var RndmNmbr;
function Fight(Kdo) {
    RndmNmbr = Math.floor(Math.random()*4+1);
    if (RndmNmbr == 1) {
        UpDateInfo();
        setTimeout(function(){ Save.Health -= 1; }, 4000);
        SwitchScreen("window5");
    }
    if (RndmNmbr == 2) {
        UpDateInfo();
        setTimeout(function(){ Save.Health -= 5; }, 3000);
        SwitchScreen("window6");
    }
    if (RndmNmbr == 3) {
        UpDateInfo();
        setTimeout(function(){ Save.Health -= 15; }, 2000);
        SwitchScreen("window7");
    }
    if (RndmNmbr == 4) {
        if (StartPohlreich == 1) {
            UpDateInfo();
        setTimeout(function(){ Save.Health -= 150; }, 1000);
        SwitchScreen("window8");
        } else {
        UpDateInfo();
        setTimeout(function(){ Save.Health -= 1; }, 4000);
        SwitchScreen("window5");
        }
    }
}




function MurlocHit() {
    if (MHealth == 0) {
        Save.Gold += 100;
        UpDateInfo();
        SwitchScreen("window9");
    }
    if (MHealth == 150) {
        MHealth -= 15;
    } else {
        if (MHealth <= 135) {
            MHealth -= 15;
        }
    }
    if (Save.Health <= 0) {
        SwitchScreen("window10");
    }
    var tmot = setTimeout(4000);
    if (tmot == 2000) {
        tmot = clearTimeout;
        Health -= 1;
        document.getElementById("hhp1").innerText = "Já : " + Save.Health + " hp";
    }
    document.getElementById("mhp").innerText = "Murloc : " + MHealth + " hp";
    document.getElementById("hhp1").innerText = "Já : " + Save.Health + " hp";
}




function TrollHit() {
    if (THealth == 0) {
        Save.Gold += 50;
        UpDateInfo();
        SwitchScreen("window9");
    }
    if (THealth == 20) {
        THealth -= 10;
    } else {
        if (THealth <= 10) {
            THealth -= 10;
        }
    }
    if (Save.Health <= 0) {
        SwitchScreen("window10");
    }
    var tmot = setTimeout(3000);
    if (tmot == 2000) {
        tmot = clearTimeout;
        Health -= 5;
        document.getElementById("hhp2").innerText = "Já : " + Save.Health + " hp";
    }
    document.getElementById("thp").innerText = "Troll : " + THealth + " hp";
    document.getElementById("hhp2").innerText = "Já : " + Save.Health + " hp";
}




function DragonHit() {
    if (DHealth == 0) {
        Save.Gold += 1000;
        UpDateInfo();
        SwitchScreen("window9");
    }
    if (DHealth == 300) {
        DHealth -= 5;
    } else {
        if (DHealth <= 295) {
            DHealth -= 5;
        }
    }
    if (Save.Health <= 0) {
        SwitchScreen("window10");
    }
    var tmot = setTimeout(2000);
    if (tmot == 2000) {
        tmot = clearTimeout;
        Health -= 15;
        document.getElementById("hhp3").innerText = "Já : " + Save.Health + " hp";
    }
    document.getElementById("dhp").innerText = "Drak : " + DHealth + " hp";
    document.getElementById("hhp3").innerText = "Já : " + Save.Health + " hp";
}




function PohlreichHit() {
    if (PHealth == 0) {
        Save.Gold += 10000;
        UpDateInfo();
        SwitchScreen("window9");
    }
    if (PHealth == 500) {
        PHealth -= 2;
    } else {
        if (PHealth <= 498) {
            PHealth -= 2;
        }
    }
    if (Save.Health <= 0) {
        SwitchScreen("window10");
    }
    var tmot = setTimeout(1000);
    if (tmot == 2000) {
        tmot = clearTimeout;
        Health -= 150;
        document.getElementById("hhp4").innerText = "Já : " + Save.Health + " hp";
    }
    document.getElementById("php").innerText = "Pohlreich : " + PHealth + " hp";
    document.getElementById("hhp4").innerText = "Já : " + Save.Health + " hp";
}




function MoreInfo() {
    document.getElementById("spoiler").innerText = "Za ostatní bugy si můžete sami!!!";
    document.getElementById("spoiler").setAttribute("disabled", true);
}




function Shop() {
    SwitchScreen("window11");
}




function weapon3() {
    Gold -= 100000;
    StartPohlreich += 1;
    UpDateInfo();
}


function upgrade1() {
    Gold -= 300;
    Health += 100;
    UpDateInfo();
}
