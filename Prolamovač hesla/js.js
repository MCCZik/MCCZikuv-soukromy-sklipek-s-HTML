var heslo;
var number;
var number2;
var text;
var text2;
var text3;
var text4;
var text5;
var text6;
var random;
var hesl;
function vyhodnotit() {
    heslo = document.getElementById("password").value;
    number = heslo.includes(123);
    number2 = heslo.includes(123456789);
    hesl = heslo.includes('heslo');
    if (hesl == true) {
        document.getElementById('answer').innerText = "Heslo jako Heslo není bezpečné heslo!";
    } else {
        if (number == true) {
            document.getElementById('answer').innerText = "To rozlouskne i tříleté dítě...";
        } else {
            if (number2 == true) {
                document.getElementById('answer').innerText = "To snad nemyslíš vážně...";
            } else {
                if (!heslo.includes(undefined))   {
                    random = Math.floor(Math.random()*10+1);
                    switch (random) {
                        case 1:
                            document.getElementById('answer').innerText = "To se učí v 2. třídě...";
                            break;
                        case 2:
                            document.getElementById('answer').innerText = "I noob má těžší heslo...";
                            break;
                        case 3:
                            document.getElementById('answer').innerText = "Jestli si myslíš že ho máš dlouhé, tak potom profík ho má 3x delší...";
                            break;
                        case 4:
                            document.getElementById('answer').innerText = "Zkus Lorem ipsum dolor sit amet...";
                            break;
                        case 5:
                            document.getElementById('answer').innerText = "Trochu se snaž aspoň...";
                            break;
                        case 6:
                            document.getElementById('answer').innerText = "Tvoje heslo má míň HP, než rohlík z Kauflandu...";
                            break;
                        case 7:
                            document.getElementById('answer').innerText = "Tomu říkáš bezpečné heslo!?!";
                            break;  
                        case 8:
                            document.getElementById('answer').innerText = "Ty si asi myslíš, že:Čím kratší, tím je dokonalejší...";
                            break;
                        case 9:
                            document.getElementById('answer').innerText = "Víš o tom, že existujou znaky jako: #&@€Đ$...";
                            break;
                        case 10:
                            document.getElementById('answer').innerText = "To si snad děláš srandu...";
                            break;      
                        default:
                            break;
                    }
                }
            }            
        }       
    }


    
}