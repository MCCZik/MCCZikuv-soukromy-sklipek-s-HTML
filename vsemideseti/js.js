const text = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp... under the circumstances. - Well, Adam, today we are men. - We are! - Bee-men. - Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive Oity graduating class of... ...9:15. That concludes our ceremonies. And begins your career at Honex Industries! Will we pick ourjob today? I heard it's just orientation. Heads up! Here we go. Keep your hands and antennas inside the tram at all times. - Wonder what it'll be like? - A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. This is it! Wow. Wow. We know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life. Honey begins when our valiant Pollen Jocks bring the nectar to the hive. Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as... Honey! - That girl was hot. - She's my cousin! - She is? - Yes, we're all cousins. - Right. You're right. - At Honex, we constantly strive to improve every aspect of bee existence. These bees are stress-testing a new helmet technology. - What do you think he makes? - Not enough. Here we have our latest advancement, the Krelman. - What does that do? - Oatches that little strand of honey that hangs after you pour it. Saves us millions. Oan anyone work on the Krelman? Of course. Most bee jobs are small ones. But bees know that every small job, if it's done well, means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life. The same job the rest of your life? I didn't know that. What's the difference? You'll be happy to know that bees, as a species, haven't had one day off in 27 million years. So you'll just work us to death? We'll sure try. Wow! That blew my mind!";
var parts;
var game;
var CurrentPart;
var errors = 0;
var Start;
var Time;
var Uhozy = 0;
var CurrentSymbol;
var failStreak;
function Init() {


    parts = text.toLowerCase().split('.');
    var empty = [];
    for (let index = 0; index < parts.length; index++) {
        if (parts[index][0] == " ") parts[index] = parts[index].slice(1);
        if (parts[index] == "") empty[empty.length] = index;
    }

    console.log(empty.toString());

    for (let index = 0; index < empty.length; index++) {
        parts.splice((empty[index]-index),1);
    }
    Interval = setInterval(Handler, 5);
    game = window.prompt('Vyber části od 1 do ' + parts.length + ' ve formátu "15-22"').split('-');
    game = [parseInt(game[0]-1), parseInt(game[1]-1)];
    CurrentPart = game[0];
    Start = new Date;
    InitPart();
    
}

var Interval;

function Handler() {
    time = new Date;
    var input = document.getElementById('input').value;
    document.getElementById('input').value = "";
    if (input != "") {
        if (input == parts[CurrentPart][CurrentSymbol]) {
            if (failStreak) {
                document.getElementById('symbol'+CurrentSymbol).className = "pastsymbolerror";
            } else {
                document.getElementById('symbol'+CurrentSymbol).className = "pastsymbol";
            }
            failStreak = false;
            CurrentSymbol += 1;
            Uhozy += 1;
            if (CurrentSymbol == parts[CurrentPart].length) {
                CurrentPart += 1;
                if (CurrentPart > game[1]) {
                    Finish();
                } else {
                    InitPart();
                }
            } else {
                document.getElementById('symbol'+CurrentSymbol).className = "currentsymbol";
            }
        } else {
            if (!failStreak) {
                errors += 1;
                document.getElementById('symbol'+CurrentSymbol).className = "currentsymbolerror";
                failStreak = true;
            }
        }
    }
    if (Uhozy > 0) {
        document.getElementById("stats1").innerText = "Chyby : " + errors;
        document.getElementById("stats2").innerText = "Úspěšnost : " + (Math.round(((Uhozy - errors)/Uhozy)*10000)/100) + "%";
        document.getElementById("stats3").innerText = "Rychlost : " + (Math.round(Uhozy*6000000/(time.getTime()-Start.getTime()))/100) + " Úhozů/min";
        document.getElementById("stats4").innerText = "Část : " + (CurrentPart-game[0]+1) + "/" + (game[1]-game[0]+1);
    }
}
function InitPart() {
    document.getElementById('game').innerHTML = "";
    for (let index = 0; index < parts[CurrentPart].length; index++) {
        const element = parts[CurrentPart][index];
        document.getElementById('game').innerHTML += "<span id='symbol" + index + "'>"+ element + "</span>";
    }
    CurrentSymbol = 0;
    document.getElementById('symbol0').className = "currentsymbol";
    failStreak = false;
}

function Finish() {
    clearInterval(Interval);
    window.alert("Jsi nakonci!");
}