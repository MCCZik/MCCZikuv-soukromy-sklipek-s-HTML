function Init() {
    SwitchScreen("window0")
}

function SwitchScreen(window) {
    for (let index = 0; index < document.getElementsByClassName("window").length; index++) {
        document.getElementsByClassName("window")[index].setAttribute("hidden", true);
    }
    document.getElementById(window).removeAttribute("hidden");
}

var Days = 1;
var akci = [' se zamiloval s ',' prozil vybornou noc s ',' se rozesel s ',' pozval na rande ',' nabidl prespani ',' se snazil utopit ',' pozval na svou oslavu narozenin ',' zjistil, ze byl podveden ',' si zahral videohru s ',' se zachoval jako sigma, aby projevil zajem u ',' sel do parku s ',' uvaril kafe ',' vyhodil z domu ',' urazil ',' ponizil ',' zajimavym zpusobem potesil ',' se zacal po vecerech ucit s '];
var mreakci = [' je nadseny!',' je smutny!',' je ustarany!',' je nemocny!', ' je v depresich!',' je prekvapeny!',' je rozzureny!',' se pokusil o sebevrazdu s vodni pistoli!',' je nadrzeny!',' je v rozpacich!'];
var zreakci = [' je nadsena!',' je smutna!',' je ustarana!',' je nemocna!', ' je v depresich!',' je prekvapena!',' je rozzurena!',' se pokusila o sebevrazdu s vodni pistoli!',' je nadrzena!',' je v rozpacich!'];
var muzu;
var zen;
var vybranymuz;
var vybranazena;
var akce;
var mreakce;
var zreakce;
var m;
var z;
var a;
var mre;
var zre;
var prikaz;
var increment = 1;
var muzuzen = 0;


// Stats lidí
var mi = [50,50,50,50,50];
var zi = [50,50,50,50,50];
var mv = [5,5,5,5,5];
var zv = [5,5,5,5,5];
var ms = [5,5,5,5,5];
var zs = [5,5,5,5,5];
var ml = [0,0,0,0,0];
var zl = [0,0,0,0,0];



function StartSim() {
    muzu = parseInt(document.getElementById('man').value);
    zen = parseInt(document.getElementById('woman').value);
    muzuzen = muzu+zen;
    if (muzu == null || muzu == undefined || muzu == NaN || zen == null || zen == undefined || zen == NaN ) {
        window.alert('Nezadal jste vsechny nutne udaje.')
    }
    if (muzu > 5 || zen > 5) {
        window.alert('Maximalne muze byt pouze 10 lidi dohromady. Pokud mate potize, nactete stranku znovu!');
    } else {
        SwitchScreen("window2");
        for (let i = 0; i < muzu; i++) {
            document.getElementById('window2').innerHTML += "<h2> Zadejte jmeno muze cislo "+ (i+1) +":<br><input type='string' placeholder='zde napiste jmeno' id='" + (i+1) +"m'required><br><h2>Zadejte jeho inteligenci (50 - 150, cim vetsi, tim chytrejsi):<br><input type='range' min='50' max='150' id='" + (i+1) +"mi'required><br><h2>Zadejte jeho vzhled (1 - 10, cim vetsi, tim krasnejsi):<br><input type='range' min='1' max='10' id='" + (i+1) +"mv' required><br><h2>Zadejte jeho sebevedomi (1 - 10, cim vetsi, tim jistejsi):<br><input type='range' min='1' max='10' id='" + (i+1) +"ms' required><hr>"
        }
        for (let i = 0; i < zen; i++) {
            document.getElementById('window2').innerHTML += "<h2> Zadejte jmeno zeny cislo "+ (i+1) +":<br><input type='string' placeholder='zde napiste jmeno' id='" + (i+1) +"z'required><br><h2>Zadejte jeji inteligenci (50 - 150, cim vetsi, tim chytrejsi):<br><input type='range' min='50' max='150' id='" + (i+1) +"zi'required><br><h2>Zadejte jeji vzhled (1 - 10, cim vetsi, tim krasnejsi):<br><input type='range' min='1' max='10' id='" + (i+1) +"zv' required><br><h2>Zadejte jeji sebevedomi (1 - 10, cim vetsi, tim jistejsi):<br><input type='range' min='1' max='10' id='" + (i+1) +"zs' required><hr>"
        }
        document.getElementById('window2').innerHTML += "<button id='potvrdit' onclick='Potvrdit()'>Simuluj!</button>"
    }
}

function Potvrdit() {
    for (let i = 0; i < muzu; i++) {
    mi[i] = parseInt(document.getElementById((i+1)+'mi').value);
    mv[i] = parseInt(document.getElementById((i+1)+'mv').value);
    ms[i] = parseInt(document.getElementById((i+1)+'ms').value);
    } for (let i = 0; i < zen; i++) {
    zi[i] = parseInt(document.getElementById((i+1)+'zi').value);
    zv[i] = parseInt(document.getElementById((i+1)+'zv').value);
    zs[i] = parseInt(document.getElementById((i+1)+'zs').value);
    }
    SwitchScreen("window3");
    NextDay();
}

function NextDay() {
    for (let i = 0; i < increment; i++) {
        document.getElementById('events').innerHTML += "<h2>" + Days + ". den</h2>"
        for (let i = 0; i < muzuzen; i++) {
            vybranymuz = Math.floor(Math.random()*muzu+1);
            vybranazena = Math.floor(Math.random()*zen+1);
            akce = Math.floor(Math.random()*(akci.length));
            mreakce = Math.floor(Math.random()*(mreakci.length));
            zreakce = Math.floor(Math.random()*(zreakci.length));
            m = document.getElementById(vybranymuz + "m").value;
            z = document.getElementById(vybranazena + "z").value;
            a = akci[akce];
            mre = mreakci[mreakce];
            zre = zreakci[zreakce];
            document.getElementById('events').innerHTML += m + a + z + "<br>";
            document.getElementById('events').innerHTML += m + mre + "<br>";
            document.getElementById('events').innerHTML += z + zre + "<br>"; 
            Interaction();     
        }
        Days = Days +1;       
    }
}

function Interaction() {
    //zamilování
    if (akce == 0) {
        ms[vybranymuz-1] += 1;
        zs[vybranazena-1] += 1;
        ml[vybranymuz-1] += 1;
        zl[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //výborná noc
    if (akce == 1) {
        ms[vybranymuz-1] += 1;
        zv[vybranazena-1] -= 1;
        ml[vybranymuz-1] += 2;
        zl[vybranazena-1] += 2;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizil vzhled na " + zv[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //rozchod
    if (akce == 2) {
        ms[vybranymuz-1] -= 2;
        zs[vybranazena-1] -= 2;
        ml[vybranymuz-1] -= 10;
        zl[vybranazena-1] -= 10;
        document.getElementById('events').innerHTML += "<i>" + m + " se snizilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se snizila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //rande
    if (akce == 3) {
        mv[vybranymuz-1] += 1;
        zv[vybranazena-1] += 1;
        ms[vybranymuz-1] += 2;
        zs[vybranazena-1] += 2;
        ml[vybranymuz-1] += 5;
        zl[vybranazena-1] += 5;
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysil vzhled na " + mv[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysil vzhled na " + zv[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //prespani
    if (akce == 4) {
        ms[vybranymuz-1] += 1;
        ml[vybranymuz-1] += 2;
        zl[vybranazena-1] += 2;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //utopení
    if (akce == 5) {
        mv[vybranymuz-1] -= 2;
        zv[vybranazena-1] -= 5;
        ml[vybranymuz-1] -= 10;
        zl[vybranazena-1] -= 3;
        document.getElementById('events').innerHTML += "<i>" + m + " se snizil vzhled na " + mv[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizil vzhled na " + zv[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se snizila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //narozeniny
    if (akce == 6) {
        ms[vybranymuz-1] += 1;
        zs[vybranazena-1] += 1;
        ml[vybranymuz-1] += 1;
        zl[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //podvedení
    if (akce == 7) {
        ms[vybranymuz-1] -= 2;
        zs[vybranazena-1] -= 2;
        ml[vybranymuz-1] -= 10;
        zl[vybranazena-1] -= 10;
        document.getElementById('events').innerHTML += "<i>" + m + " se snizilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se snizila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //videohra
    if (akce == 8) {
        ms[vybranymuz-1] += 1;
        zs[vybranazena-1] += 1;
        ml[vybranymuz-1] += 1;
        zl[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //sigma
    if (akce == 9) {
        ms[vybranymuz-1] += 1;
        ml[vybranymuz-1] += 1;
        zl[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //park
    if (akce == 10) {
        ms[vybranymuz-1] += 1;
        zs[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
    }
    //kafe
    if (akce == 11) {
        ms[vybranymuz-1] += 1;
        zs[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
    }
    //vyhozeni z domu
    if (akce == 12) {
        ms[vybranymuz-1] += 5;
        zs[vybranazena-1] -= 2;
        ml[vybranymuz-1] -= 5;
        zl[vybranazena-1] -= 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + m + " se snizila laska na " + ml[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //urazit
    if (akce == 13) {
        ms[vybranymuz-1] += 5;
        zs[vybranazena-1] -= 2;
        zl[vybranazena-1] -= 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //ponizit
    if (akce == 14) {
        ms[vybranymuz-1] += 5;
        zs[vybranazena-1] -= 2;
        zl[vybranazena-1] -= 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se snizila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //potesit
    if (akce == 15) {
        ms[vybranymuz-1] += 1;
        zl[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysila laska na " + zl[vybranazena-1] + "</i><br>";
    }
    //ucit
    if (akce == 16) {
        ms[vybranymuz-1] += 1;
        zs[vybranazena-1] += 1;
        document.getElementById('events').innerHTML += "<i>" + m + " se zvysilo sebevedomi na " + ms[vybranymuz-1] + "</i><br>";
        document.getElementById('events').innerHTML += "<i>" + z + " se zvysilo sebevedomi na " + zs[vybranazena-1] + "</i><br>";
    }
    document.getElementById('events').innerHTML += "<br>";
}

function Clear() {
    m = "";
    z = "";
    a = "";
    mre = "";
    zre = "";
}

function KD(e) {
    if (e.key == "Enter") {
        Prikaz()
    }
}

function KDM(e) {
    if (e.key == "Enter") {
        NextDay()
    }
}
function Prikaz() {
    prikaz = document.getElementById('cmds').value;
    if (prikaz.startsWith('days')) {
        increment = parseInt(prikaz.slice(4,prikaz.length));
    }
    if (prikaz == "help") {
        document.getElementById('cmds').value = "";
        SwitchScreen('window4')
    }
}

function Homo() {
    window.alert('Homo mod v tuto chvíli není hotov.')
}

function Vymazat() {
    document.getElementById('events').innerHTML = "";
}

function End() {
    window.location.href = "about:blank";
}