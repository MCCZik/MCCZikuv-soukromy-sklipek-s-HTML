var Obj;
var Znamky = [];
var Meta;
const Typy = {
  "z_1b":1,
  "z_1c":1.2,
  "z_1d":1.5,
  "z_2a":1.8,
  "z_2b":2,
  "z_2c":2.2,
  "z_2d":2.5,
  "z_3a":2.8,
  "z_3b":3,
  "z_3c":3.2,
  "z_3d":3.5,
  "z_4a":3.8,
  "z_4b":4,
  "z_4c":4.2,
  "z_4d":4.5,
  "z_5a":4.8,
  "z_5b":5
}
const Nazvy = {
  "z_1b":"1",
  "z_1c":"1·",
  "z_1d":"1-",
  "z_2a":"2+",
  "z_2b":"2",
  "z_2c":"2·",
  "z_2d":"2-",
  "z_3a":"3+",
  "z_3b":"3",
  "z_3c":"3·",
  "z_3d":"3-",
  "z_4a":"4+",
  "z_4b":"4",
  "z_4c":"4·",
  "z_4d":"4-",
  "z_5a":"5+",
  "z_5b":"5"
}

function Init() {
  SwitchScreen('main');
  Load();
}

function AddLesson() {
  var Name = document.getElementById('nl_i1').value;
  Znamky[Znamky.length] = [Name];
  Save();
  SwitchScreen('main');
}

function Save() {
  Obj = {};
  Obj.Znamky = Znamky;
  localStorage.ZK = JSON.stringify(Obj);
  Reload();
}

function Load() {
  if (localStorage.ZK == undefined) Save();
  Obj = JSON.parse(localStorage.ZK);
  Znamky = Obj.Znamky;
  Reload();
}

function Reload() {
  document.getElementById('container').innerHTML = "";
  if (Znamky.length == 0) {
    document.getElementById('container').innerHTML += "<i>Musíš si přidat předmět!</i>";
  } else {
    for (let index = 0; index < Znamky.length; index++) {
      const element = Znamky[index];
      var DIV = Make('div', "");
      DIV.className = "predmet";
      var H2 = Make('h2', element[0])
      var BR = Make('br', "");
      var BUTTON = Make('button', "Nová Známka");
      var BUTTON2 = Make('button', "Odstranit předmět");
      var HR = Make('hr', "");
      DIV.appendChild(H2);
      DIV.appendChild(BUTTON);
      DIV.appendChild(BUTTON2);
      BUTTON2.setAttribute('onclick','Meta = ' + index + ';SwitchScreen("dl")');
      BUTTON.setAttribute('onclick', "SwitchScreen('newmark');Clear('nm');Meta = " + index)
      DIV.appendChild(HR);
      if (element.length == 1) {
        var SPAN = Make('span', '<i>Prozatím bez známek</i>');
        DIV.appendChild(SPAN);
        var HR = Make('hr', "");
        DIV.appendChild(HR);
        var SPAN2 = Make('span', 'Průměr : <i>žádný</i>');
        DIV.appendChild(SPAN2)
      } else {
        var TOTAL = 0;
        var WEIGHT = 0;
        var OMGTOTAL = 0;
        for (let index2 = 1; index2 < element.length; index2++) {
          const element2 = element[index2];
          var SPAN = Make('span', element2[0]);
          SPAN.setAttribute('onclick', 'Inspect('+index+','+index2+')');
          SPAN.setAttribute('title', element2[3]);
          SPAN.className = "znamecka";
          OMGTOTAL += element2[1];
          TOTAL += element2[1]*element2[2];
          WEIGHT += element2[2];
          DIV.appendChild(SPAN);
        }
        var HR = Make('hr', "");
        DIV.appendChild(HR);
        var SPAN2 = Make('span', 'Průměr : ' + Math.round(TOTAL/WEIGHT*100)/100 + ' (' + Math.round(OMGTOTAL/(element.length-1)*100)/100 + ')');
        DIV.appendChild(SPAN2);
      }
      document.getElementById('container').appendChild(DIV);
    }
  }
}

function SwitchScreen(AjDy) {
  for (let index = 0; index < document.getElementsByClassName('screen').length; index++) {
    document.getElementsByClassName('screen')[index].setAttribute('hidden', true);
  }
  document.getElementById(AjDy).removeAttribute('hidden');
}

function Clear(what) {
  switch (what) {
    case "nl":{
      document.getElementById('nl_i1').value = "";
      break;
    }
    case "nm":{
      document.getElementById('nm_i1').value = "";
      document.getElementById('nm_i2').value = "0";
      document.getElementById('nm_i3').value = "0";
      break;
    }
    default:{
      break;
    }
  }
}

function Make(What, With) {
  var Out = document.createElement(What);
  Out.innerHTML = With;
  return Out;
}

function DeleteLesson() {
  Znamky.splice(Meta, 1);
  Save();
  SwitchScreen('main');
}

function AddMark() {
  var I1 = document.getElementById('nm_i1').value;
  var I2 = document.getElementById('nm_i2').value;
  var I3 = document.getElementById('nm_i3').value;

  if (I2 == "0" || I3 == "0" || I1 == "") {
    window.alert('Musíš vyplnit všechna pole.');
  } else {
    
    Znamky[Meta][Znamky[Meta].length] = [Nazvy["z_"+I2], Typy["z_"+I2], parseFloat(I3), I1];
    Save();
    SwitchScreen('main');
  }
}

function Inspect(ID1, ID2) {
  Meta = [ID1, ID2];
  var Bruh = Znamky[ID1][ID2];
  if (Bruh[2] == 1) {
    var Vaha = "Velmi velká (100%)";
  } else {
    if (Bruh[2] == 0.75) {
      var Vaha = "Velká (75%)";
    } else {
      if (Bruh[2] == 0.5) {
        var Vaha = "Normální (50%)";
      } else {
        if (Bruh[2] == 0.35) {
          var Vaha = "Malá (35%)";
        } else {
          if (Bruh[2] == 0.2) {
            var Vaha = "Velmi malá (20%)";
          } else {
            var Vaha = "Mini (10%)";
          }
        }
      }
    }
  }
  document.getElementById('i_1').innerText = Znamky[ID1][0];
  document.getElementById('i_2').innerText = Bruh[3];
  document.getElementById('i_3').innerText = Bruh[0];
  document.getElementById('i_4').innerText = Bruh[1];
  document.getElementById('i_5').innerText = Vaha;
  SwitchScreen('inspect');
}

function DeleteMark() {
  Znamky[Meta[0]].splice(Meta[1], 1);
  Save();
  SwitchScreen('main');
}