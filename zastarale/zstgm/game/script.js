var Captcha;
const Colors = ["navy","maroon","green","gray","olive"];
const Cols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B"];
var Level = 10000;
var Score = -1;

function Init() {
    Level = 10000;
    Score = -1;
    NewCaptcha();
}

function NewCaptcha() {
    Captcha = "";
    for (let i = 0; i < 4; i++) {
        Captcha += String.fromCharCode(65+Math.floor(Math.random()*26));
    }
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,160,72);
    ctx.fillStyle = rc();
    ctx.font = "48px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText(Captcha, 80, 54);
    for (let i = 0; i < Level; i++) {
        ctx.fillStyle = rc();
        ctx.fillRect(Math.floor(Math.random()*160),Math.floor(Math.random()*72),1,1)
    }
    Score += 1;
    Level += 500;
}

function Valid() {
    var Test = document.getElementById('captcha').value;
    if (Test.toLowerCase() != Captcha.toLowerCase()) {
        window.alert("Prohrál jsi!\nScore : "+Score+"\nOdpověď : " + Captcha);
        Init();
    } else {
        NewCaptcha();
    }
    document.getElementById('score').innerText = "Score : " + Score + " [Px:" + (Level-500) + "]";
    document.getElementById('captcha').value = "";
}

function rc() {
    return "#"+Cols[Math.floor(Math.random()*12)]+Cols[Math.floor(Math.random()*12)]+Cols[Math.floor(Math.random()*12)]+Cols[Math.floor(Math.random()*12)]+Cols[Math.floor(Math.random()*12)]+Cols[Math.floor(Math.random()*12)];
}