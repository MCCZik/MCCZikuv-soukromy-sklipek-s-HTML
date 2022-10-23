var Meta = {};
var ctx = document.createElement('canvas').getContext('2d');
var FullURL = location;

function Init() {
  SwitchScreen("loading");
  Meta.Main = new Image;
  Meta.Ready = false;
  Meta.Main.src = ImageName;
  Meta.Main.onload = function() {
    Meta.Res = [Meta.Main.width, Meta.Main.height];
    setTimeout(function(){
      document.getElementById('canvas').setAttribute('width', Meta.Main.width);
      document.getElementById('canvas').setAttribute('height', Meta.Main.height);
      if (localStorage.reset == undefined) {
        SwitchScreen("login");
      } else {
        var rapido = localStorage.reset;
        if (rapido == "no") {
          SwitchScreen("login");
        } else {
          Login(true);
        }
      }
    }, 500);
  }
  ctx = document.getElementById('canvas').getContext('2d');
  Render();
}

function SwitchScreen(id) {
  for (let i = 0; i < document.getElementsByClassName('screen').length; i++) {
    document.getElementsByClassName('screen')[i].setAttribute('hidden', true);
  }
  document.getElementById(id).removeAttribute('hidden');
}

var AnswersCorrect = [];
function Login(sus = false) {
  if (sus) {
    SwitchScreen("loading");
    Meta.Login = localStorage.reset;
    GetKillerList(LoginAfter);
    Meta.Ready = true;
    localStorage.reset = "no";
  } else {
    var input1 = document.getElementById('fname').value;
    var input2 = document.getElementById('lname').value;
    if (input1.trim().length == 0 || input2.trim().length == 0) {
      alert('Nesprávné zadané údaje. Vyplň prosím obě pole. :D');
    } else {
      SwitchScreen("loading");
      Meta.Login = input2.trim().toLowerCase() + "." + input1.trim().toLowerCase();
      GetKillerList(LoginAfter);
      Meta.Ready = true;
    }
  }
}

function LoginAfter() {
  for (let i = 0; i < 24; i++) {
    AnswersCorrect[i] = false;
  }
  for (let i = 0; i < Meta.Full.length; i++) {
    const entry = Meta.Full[i];
    if (Meta.Login == entry[0] && entry[3] == 1) AnswersCorrect[entry[1] - 1] = true; 
  }
  SwitchScreen("general");
}

function Hash(textToHash) {
  return (sha256(textToHash.trim().toLowerCase())).slice(-16);
}

function GetKillerList(after) {
  var AJAX = new XMLHttpRequest;
  AJAX.open('get', FullURL + 'killerlist.txt?yay='+Math.ceil(Math.random()*894981498));
  AJAX.send();
  AJAX.responseType = "text";
  AJAX.onload = function() {
    Meta.KL = AJAX.response.split("\n");
    Meta.Full = [];
    for (let i = 0; i < (Meta.KL.length-1); i++) {
      const SL = Meta.KL[i].trim().split("$");
      Meta.Full[i] = [SL[0], parseInt(SL[1]), SL[2], parseInt(SL[3])];
    }
    after();
  }
}

function SendAns(day, ans) {
    var Sha = Hash(ans);
    var Quick = 0;
    if (Questions[day-1][4].length < 16) {
      if (Questions[day-1][4].indexOf(Sha) != -1) {
        Quick = 1;
      }
    } else {
      if (Sha == Questions[day-1][4]) {
        Quick = 1;
      }
    }
  
    SwitchScreen('loading');
    var AJAX = new XMLHttpRequest;
    AJAX.open('get', 'server.php?login='+Meta.Login+'&day='+day+'&hash='+Sha+'&quick='+Quick+'&ans='+ans);
    AJAX.send();
    AJAX.onload = function() {
      if (Quick == 0) {
        alert("Nesprávná odpověď. Odpověď byla zaznamenána.");
        GetKillerList(Update);
      } else {
        alert("Správně! Odpověď byla zaznamenána.");
        Restart();
      }
    }
  }

function Update() {
  SwitchScreen('general');
}

function Render() {
  if (Meta.Ready) {
    var Days = Math.floor((new Date).getTime()/(1000*60*60*24))-18961+DayOffset;
    var Unit = [Meta.Res[0]/6, Meta.Res[1]/4];
    ctx.clearRect(0,0,Meta.Res[0],Meta.Res[1]);
    ctx.drawImage(Meta.Main, 0, 0);
    ctx.textAlign = "center";
    for (let i = 0; i < 24; i++) {
      if (Days < DayMatrix[i]) {

        ctx.fillStyle = "#111111";
        ctx.fillRect(Unit[0]*(i%6),Unit[1]*Math.floor(i/6),Unit[0],Unit[1]);

        if (CursorAt == i) {
          ctx.fillStyle = "#171717";
          ctx.fillRect(Unit[0]*(i%6),Unit[1]*Math.floor(i/6),Unit[0],Unit[1]);

          ctx.fillStyle = "black";
          ctx.fillRect(Unit[0]*((i%6)+0.5)-80,Unit[1]*(Math.floor(i/6)+0.5)+30,160,40);
          ctx.fillStyle = "white";
          ctx.font = "bold 36px Ubuntu Condensed";
          ctx.fillText("Uzamčeno",Unit[0]*((i%6)+0.5),Unit[1]*(Math.floor(i/6)+0.5)+63);
        }

        ctx.fillStyle = "black";
        ctx.fillRect(Unit[0]*((i%6)+0.5)-30,Unit[1]*(Math.floor(i/6)+0.5)-20,60,40);
        ctx.fillStyle = "white";
        ctx.font = "bold 36px Ubuntu Condensed";
        ctx.fillText(DayMatrix[i],Unit[0]*((i%6)+0.5),Unit[1]*(Math.floor(i/6)+0.5)+13);

      } else {
        if (!AnswersCorrect[DayMatrix[i]-1]) {
          
          ctx.fillStyle = "#272727";
          ctx.fillRect(Unit[0]*(i%6),Unit[1]*Math.floor(i/6),Unit[0],Unit[1]);
  
          if (CursorAt == i) {
            ctx.fillStyle = "#373737";
            ctx.fillRect(Unit[0]*(i%6),Unit[1]*Math.floor(i/6),Unit[0],Unit[1]);
  
            ctx.fillStyle = "#222";
            ctx.fillRect(Unit[0]*((i%6)+0.5)-80,Unit[1]*(Math.floor(i/6)+0.5)+30,160,40);
            ctx.fillStyle = "white";
            ctx.font = "bold 36px Ubuntu Condensed";
            ctx.fillText("Otevřít",Unit[0]*((i%6)+0.5),Unit[1]*(Math.floor(i/6)+0.5)+63);
          }
  
          ctx.fillStyle = "#222";
          ctx.fillRect(Unit[0]*((i%6)+0.5)-30,Unit[1]*(Math.floor(i/6)+0.5)-20,60,40);
          ctx.fillStyle = "white";
          ctx.font = "bold 36px Ubuntu Condensed";
          ctx.fillText(DayMatrix[i],Unit[0]*((i%6)+0.5),Unit[1]*(Math.floor(i/6)+0.5)+13);

        } else {

          if (CursorAt == i) {
            ctx.fillStyle = "#ffffff33";
            ctx.fillRect(Unit[0]*(i%6),Unit[1]*Math.floor(i/6),Unit[0],Unit[1]);
  
            ctx.fillStyle = "white";
            ctx.fillRect(Unit[0]*((i%6)+0.5)-80,Unit[1]*(Math.floor(i/6)+0.5)+30,160,40);
            ctx.fillStyle = "black";
            ctx.font = "bold 36px Ubuntu Condensed";
            ctx.fillText("Dokončeno",Unit[0]*((i%6)+0.5),Unit[1]*(Math.floor(i/6)+0.5)+63);
          }
  
          ctx.fillStyle = "white";
          ctx.fillRect(Unit[0]*((i%6)+0.5)-30,Unit[1]*(Math.floor(i/6)+0.5)-20,60,40);
          ctx.fillStyle = "black";
          ctx.font = "bold 36px Ubuntu Condensed";
          ctx.fillText(DayMatrix[i],Unit[0]*((i%6)+0.5),Unit[1]*(Math.floor(i/6)+0.5)+13);

        }
      }
    }


    // Debug
    /*
      ctx.textAlign = "left";
      ctx.font = "24px Ubuntu Condensed";
      ctx.fillStyle = "#f0f";
      ctx.fillText(CursorAt + " (day " + CursorDay + ")" + Cursor,8,28);
    */
  }
  requestAnimationFrame(Render);
}

var CursorAt = -1;
var CursorDay = -1;
var Cursor = [0,0];
function MM(e) {
  Cursor = [e.offsetX/e.target.clientWidth, e.offsetY/e.target.clientHeight];
  CursorAt = Math.floor(6*e.offsetX/e.target.clientWidth) + 6*Math.floor(4*e.offsetY/e.target.clientHeight);
  CursorDay = DayMatrix[CursorAt];
}

function Send() {
  var ANS = document.getElementById('qans').value.toUpperCase().trim();
  if (ANS.length == 0) {
    alert("Zadej nejdřív odpověď!");
  } else {
    SendAns(Meta.SelectedDay, ANS);
  }
}

function MC(e) {
  Cursor = [e.offsetX/e.target.clientWidth, e.offsetY/e.target.clientHeight];
  CursorAt = Math.floor(6*e.offsetX/e.target.clientWidth) + 6*Math.floor(4*e.offsetY/e.target.clientHeight);
  CursorDay = DayMatrix[CursorAt];
  OpenQuestion(CursorDay);
}

function OpenQuestion(day) {
  Meta.SelectedDay = day;
  var Days = Math.floor((new Date).getTime()/(1000*60*60*24))-18961+DayOffset;
  if (Days < day) {
    alert("Úloha uzamčena! Ještě chvíli počkej...");
  } else {
    SwitchScreen('ques');
    document.getElementById('qh1').innerText = Questions[day-1][0];
    document.getElementById('qp').innerText = Questions[day-1][1];
    document.getElementById('qimg').setAttribute('hidden', true);
    if (Questions[day-1][2] != null) {
      document.getElementById('qimg').removeAttribute('hidden');
      document.getElementById('qimg').src = Questions[day-1][2];
    }
    document.getElementById('qfo').innerText = "Formát odpovědi: " + Questions[day-1][3];
    document.getElementById('no-ans').setAttribute('hidden', true);
    document.getElementById('yes-ans').setAttribute('hidden', true);
    if (AnswersCorrect[day-1]) {
      document.getElementById('yes-ans').removeAttribute('hidden');
    } else {
      document.getElementById('no-ans').removeAttribute('hidden');
    }
  }
}

function Restart() {
  localStorage.reset = Meta.Login;
  window.location.reload();
}
