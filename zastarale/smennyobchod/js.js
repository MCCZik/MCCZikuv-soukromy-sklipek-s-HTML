//amount system
var amountwood = 0;
var amountstone = 0;
var amountiron = 0;
var amountcoal = 0;
var amounttorch = 0;
var amountcave = 0;
var amountgold = 0;
var amountsaphir = 0;
var amountruby = 0;
var amountobsidian = 0;
var amountemerald = 0;
var amountdiamond = 0;
// buying system 
var bwood;
var bstone;
var biron;
var bcoal;
var btorch;
var bcave;
var bgold;
var bsaphir;
var bruby;
var bobsidian;
var bemerald;
var bdiamond;
var cavetf = "f";
var cavecount = 0;


function UpdateInfo() {
    if (cavecount >= 20) {
        var nehoda = Math.floor(Math.random()*4+1);
        if (nehoda == 1) {
            var nehoda = "zatopena";
        }
        if (nehoda == 2) {
            var nehoda = "zasypána";
        }
        if (nehoda == 3) {
            var nehoda = "zničena";
        }
        if (nehoda == 4) {
            var nehoda = "zakoupena";
        }
        window.alert("Jeskyně byla " + nehoda + ".");
        amountcave -= 1;
        cavecount = 0;
        cavetf = "f";
    }
    document.getElementById("amountwood").innerText = "Dřevo (x" + amountwood + ")";
    document.getElementById("amountstone").innerText = "Kámen (x" + amountstone + ")";
    document.getElementById("amountiron").innerText = "Železo (x" + amountiron + ")";
    document.getElementById("amountcoal").innerText = "Uhlí (x" + amountcoal + ")";
    document.getElementById("amounttorch").innerText = "Pochodeň (x" + amounttorch + ")";
    document.getElementById("amountcave").innerText = "Jeskyně (x" + amountcave + ")";
    document.getElementById("amountgold").innerText = "Zlato (x" + amountgold + ")";
    document.getElementById("amountsaphir").innerText = "Safír (x" + amountsaphir + ")";
    document.getElementById("amountruby").innerText = "Rubín (x" + amountruby + ")";
    document.getElementById("amountobsidian").innerText = "Obsidián (x" + amountobsidian + ")";
    document.getElementById("amountemerald").innerText = "Emerald (x" + amountemerald + ")";
    document.getElementById("amountdiamond").innerText = "Diamant (x" + amountdiamond + ")";
}

function bwood() {
    amountwood += 1;
    UpdateInfo();
}

function bstone() {
    if (amountwood >= 2) {
        amountwood -= 2;
        amountstone += 1;
        UpdateInfo();
    } else {
        window.alert("Nedostatek surovin!!!")
    }
}

function biron() {
    if (amountwood >= 2) {
        if (amountstone >= 3) {
            amountwood -= 2;
            amountstone -= 3;
            amountiron += 1;
            UpdateInfo();
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    } else {
        window.alert("Nedostatek surovin!!!")
    }
}
function bcoal() {
    if (amountiron >= 2) {
        if (amountwood >= 2) {
            amountiron -= 2;
            amountwood -= 2;
            amountcoal += 1;
            UpdateInfo();
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    } else {
        window.alert("Nedostatek surovin!!!")
    }
}

function btorch() {
    if (amountcoal >= 1) {
        if (amountwood >= 1) {
            amountcoal -= 1;
            amountwood -= 1;
            amounttorch += 1;
            UpdateInfo();
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    } else {
        window.alert("Nedostatek surovin!!!")
    }
}

function bcave() {
    if (amounttorch >= 10) {
        if (amountwood >= 25) {
            if (amountiron >= 5) {
                if (amountstone >= 100) {
                    cavetf = "t";
                    amounttorch -= 10;
                    amountwood -= 25;
                    amountiron -= 5;
                    amountstone -= 100;
                    amountcave += 1;
                    UpdateInfo();
                } else {
                    window.alert("Nedostatek surovin!!!")
                }
            } else {
                window.alert("Nedostatek surovin!!!")
            }
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    } else {
        window.alert("Nedostatek surovin!!!")
    }
}

function bgold() {
    if (cavetf = "t") {
        if (amountiron >= 2) {
            if (amountwood >= 2) {
                cavecount += 1;
                amountiron -= 2;
                amountwood -= 2;
                amountgold += 1;
                UpdateInfo();
            } else {
                window.alert("Nedostatek surovin!!!")
            }
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    }else {
        window.alert("Nemáte jeskyni na to abyste mohli vykopat tuto surovinu")
    }
}

function bsaphir() {
    if (cavetf = "t") {
        if (amountiron >= 10) {
            cavecount += 1;
            amountiron -= 10;
            amountsaphir += 1;
            UpdateInfo();
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    }else {
        window.alert("Nemáte jeskyni na to abyste mohli vykopat tuto surovinu")
    }
}

function bruby() {
    if (cavetf = "t") {
        if (amountiron >= 2) {
            if (amountsaphir >= 2) {
                cavecount += 1;
                amountiron -= 2;
                amountsaphir -= 2;
                amountruby += 1;
                UpdateInfo();
            } else {
                window.alert("Nedostatek surovin!!!")
            }
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    }else {
        window.alert("Nemáte jeskyni na to abyste mohli vykopat tuto surovinu")
    }
}

function bobsidian() {
    if (cavetf = "t") {
        if (amountruby >= 4) {
            if (amountsaphir >= 10) {
                cavecount += 1;
                amountruby -= 4;
                amountsaphir -= 10;
                amountobsidian += 1;
                UpdateInfo();
            } else {
                window.alert("Nedostatek surovin!!!")
            }
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    }else {
        window.alert("Nemáte jeskyni na to abyste mohli vykopat tuto surovinu")
    }
}

function bemerald() {
    if (cavetf = "t") {
        if (amountobsidian >= 15) {
            if (amountgold >= 10) {
                if (amountdiamond >= 3) {
                    cavecount += 1;
                    amountobsidian -= 15;
                    amountgold -= 10;
                    amountdiamond -= 3;
                    amountemerald += 1;
                    UpdateInfo();
                } else {
                    window.alert("Nedostatek surovin!!!")
                }
            } else {
                window.alert("Nedostatek surovin!!!")
            }
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    }else {
        window.alert("Nemáte jeskyni na to abyste mohli vykopat tuto surovinu")
    }
}

function bdiamond() {
    if (cavetf = "t") {
        if (amountobsidian >= 10) {
            if (amountgold >= 5) {
                if (amountsaphir >= 15) {
                    cavecount += 1;
                    amountobsidian -= 10;
                    amountgold -= 5;
                    amountsaphir -= 15
                    amountdiamond += 1;
                    UpdateInfo();
                } else {
                    window.alert("Nedostatek surovin!!!")
                }
            } else {
                window.alert("Nedostatek surovin!!!")
            }
        } else {
            window.alert("Nedostatek surovin!!!")
        }
    }else {
        window.alert("Nemáte jeskyni na to abyste mohli vykopat tuto surovinu")
    }
}


