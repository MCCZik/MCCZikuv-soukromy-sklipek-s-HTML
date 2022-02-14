var UName;
var UPass;
var Name;
var Pass;
var Save;

function Regist() {
    UName = window.prompt("Zadejte uživatelské jméno");
    UPass = window.prompt("Zadejte heslo");
    if (UName == "" || UPass == "") {
        window.alert("Registrace proběhla neúspěšně! Důvod: Neplatné uživatelské jméno nebo heslo");
    }
    if (UName == Name || UPass == Pass) {
        window.alert("Registrace proběhla neúspěšně! Důvod: Existující uživatelské jméno nebo heslo");
    } else {
        window.alert("Registrace proběhla úspěšně!")
        localStorage.Save.Name = UName;
        localStorage.Save.Pass = UPass;
        localStorage.Save = JSON.stringify(Save);
    }
}


function SignIn() {
    Save = JSON.parse(localStorage.Save);
    Name = window.prompt("Zadejte uživatelské jméno");
    Pass = window.prompt("Zadejte heslo");
    if (Save.Name == Name && Save.Pass == Pass) {
        window.alert("VÍtejte!")
        window.location.href = "http://studiovp.quary.cz"
    } else {
        window.alert("Přihlášení proběhlo neúspěšně! Důvod: Účet neexistuje");
    }
}