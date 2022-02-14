var Data = {};
var Students = [];
var Znamky;

function Init() {
    Load();
    UpdateTable();
}

function Load() {
    if (localStorage.zk == undefined) {
        Znamky = 0;
        Save();
    }
    Data = JSON.parse(localStorage.zk);
    Students = Data.Students;
    Znamky = Data.Znamky;
}

function Save() {
    Data.Students = Students;
    Data.Znamky = Znamky;
    localStorage.zk = JSON.stringify(Data);
}
function Load1() {
    if (localStorage.zk == undefined) {
        Znamky = 0;
        window.alert("Potíž: Není co načíst!");
        Save();

    }
    Data = JSON.parse(localStorage.zk);
    Students = Data.Students;
    Znamky = Data.Znamky;
    window.alert("Bravo: Úspěšně načteno!");
}

function Save1() {
    Data.Students = Students;
    Data.Znamky = Znamky;
    localStorage.zk = JSON.stringify(Data);
    window.alert("Bravo: Úspěšně uloženo!");
}
function UpdateTable() {
    document.getElementById('table').innerHTML = "";
    var FTR = document.createElement('tr');
    var FTD = document.createElement('td');
    FTD.innerText = "Žáci";
    FTR.appendChild(FTD);
    for (let index = 0; index < Znamky; index++) {
        var TD = document.createElement('td');
        TD.innerText = "#" + (index+1);
        FTR.appendChild(TD);
    }
    var LTD = document.createElement('td');
    LTD.innerText = "Prům.";
    FTR.appendChild(LTD);
    document.getElementById('table').appendChild(FTR);

    for (let index = 0; index < Students.length; index++) {
        const element = Students[index];
        var TR = document.createElement('tr');
        var STD = document.createElement('td');
        STD.innerText = element.Name;
        TR.appendChild(STD);
        var Count = 0;
        var Total = 0;
        for (let index2 = 0; index2 < Znamky; index2++) {
            var MTD = document.createElement('td');
            MTD.innerText = element.Marks[index2];
            TR.appendChild(MTD);
            if (element.Marks[index2] != null) {
                Count += 1;
                Total += element.Marks[index2];
            }
        }
        var ATD = document.createElement('td');
        if (Count == 0) {
            ATD.innerText = "-";
        } else {
            ATD.innerText = Math.round(Total/Count *100)/100;
        }
        TR.appendChild(ATD);
        document.getElementById('table').appendChild(TR);
    }
}

function AddStudent() {
    var NewStudentName = "";
    while (NewStudentName == "") {
        NewStudentName = window.prompt('Zadejte jméno nového žáka');
    }
    if (NewStudentName != null) {
        Students[Students.length] = {"Name":NewStudentName,"Marks":[]};
        for (let index = 0; index < Znamky; index++) {
            Students[(Students.length-1)].Marks[index] = null;
        }
        Save();
        UpdateTable();
    }
}

function AddMark(){
    for (let index = 0; index < Students.length; index++) {
        var Text = "";
        while (Text == "") {
            Text = window.prompt('Zadejte známku pro ' + Students[index].Name);
            if (Text >= 6) {
                Text = 5;
                Students[index].Marks[Znamky] = parseFloat(Text);
            }
            if (Text == null || Text == "-") {
                Text = "-";
                Students[index].Marks[Znamky] = Text;
            }
        }
        if (Text != null) {
            Students[index].Marks[Znamky] = parseFloat(Text);
        } else {
            Students[index].Marks[Znamky] = null;
        }
    }
    Znamky += 1;
    Save();
    UpdateTable();
}