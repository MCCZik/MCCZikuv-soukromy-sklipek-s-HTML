var Data;
var Captcha;
const Colors = ["navy","maroon","green","gray","olive"];

function Init() {
    var Request = new XMLHttpRequest;
    Request.open('get', 'http://10.73.13.137/zstgm/data.json');
    Request.responseType = "json";
    Request.send();
    Request.onload = function() {
        Data = Request.response;
    }
    NewCaptcha();
}

function NewCaptcha() {
    Captcha = "";
    for (let i = 0; i < 4; i++) {
        Captcha += String.fromCharCode(65+Math.floor(Math.random()*26));
    }
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,160,72);
    ctx.fillStyle = Colors[Math.floor(Math.random()*5)];
    ctx.font = "48px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText(Captcha, 80, 54);
    for (let i = 0; i < 16000; i++) {
        ctx.fillStyle = Colors[Math.floor(Math.random()*5)];
        ctx.fillRect(Math.floor(Math.random()*160),Math.floor(Math.random()*72),1,1)
    }
}

function Valid() {
    var Name = document.getElementById('name').value;
    var Pass = document.getElementById('pass').value;
    var Test = document.getElementById('captcha').value;
    if (Name == "" || Pass == "" || Test == "") {
        window.alert('Všechny pole musí být vyplněny!');
    } else {
        if (Test.toLowerCase() != Captcha.toLowerCase()) {
            window.alert("Beep Boop?");
            NewCaptcha();
            document.getElementById('captcha').value = "";
        } else {
            var Secret = null;
            for (let i = 0; i < Data.Users.length; i++) {
                const User = Data.Users[i];
                if (Name == User.Name && Pass == User.Pass) {
                    Secret = User.Secret;
                }
            }
            if (Secret == null) {
                window.alert('Neznáme uživatelské jméno nebo heslo!');
                document.getElementById('pass').value = "";
            } else {
                document.getElementById('secret').innerText = Secret;
            }
        }
    }
}