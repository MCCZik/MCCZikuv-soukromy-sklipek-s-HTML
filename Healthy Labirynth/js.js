var minpol;
var maxpol;
var maxpolr;
var diff = 20;
var Arena;
var Player1;
var Player2;
var Interval = setInterval(Engine, 10);
var Bullets;
var Ready = false;
var Context;
var Bombs;
var end;
var wait;
var deathcount = 0;
var fight;
function Init() {
    if (document.getElementById("level").value == "edit") {
        minpol = 0
        maxpolr = 0
        fight = false
    } else {
        minpol = document.getElementById("level").value;
        maxpolr = minpol;
        fight = true
    }
    Context = document.getElementById("game").getContext("2d");
    Arena = [];
    Bullets = [];
    Bombs = [];
    wait = true
    for (let i = 0; i < 115; i++) {
        Arena[i] = [];
        for (let j = 0; j < 30; j++) {
            if (j == 0 || j == 29 || i == 0 || i == 114) {
                Arena[i][j] = true;
            } else {
                Arena[i][j] = false;
            }
            
        }
    }
    for (let i = 0; i < (Math.floor(Math.random()*maxpolr)+minpol); i++) {
        var rx = Math.floor(Math.random() *115);
        var ry = Math.floor(Math.random() *30);
        while (Arena[rx][ry]) {
            var rx = Math.floor(Math.random() *115);
            var ry = Math.floor(Math.random() *30);
        }
        Arena[rx][ry] = true;
    }
    var rx = Math.floor(Math.random() *115);
    var ry = Math.floor(Math.random() *30);
    while (Arena[rx][ry]) {
        var rx = Math.floor(Math.random() *115);
        var ry = Math.floor(Math.random() *30);
    }
    Player1 = {"x":rx,"y":ry,"d":0,"h":500}
    var rx = Math.floor(Math.random() *115);
    var ry = Math.floor(Math.random() *30);
    while (Arena[rx][ry]) {
        var rx = Math.floor(Math.random() *115);
        var ry = Math.floor(Math.random() *30);
    }
    Player2 = {"x":rx,"y":ry,"d":0,"h":500}
    Ready = true;
}
function Engine() {
    if (deathcount >=5) {
        document.getElementById("zprava").innerText = ""
        deathcount = 0
    }
    if (Ready) {
        for (let i = 0; i < 115; i++) {
            Arena[i][0] = true;
        }
        for (let i = 0; i < 30; i++) {
            Arena[0][i] = true;
        }
        for (let i = 0; i < 115; i++) {
            Arena[i][29] = true;
        }
        for (let i = 0; i < 30; i++) {
            Arena[114][i] = true;
        }
        Player1.h -=diff/100;
        Player2.h -=diff/100;
        if (Player1.h > 500) {Player1.h = 500}
        if (Player2.h > 500) {Player2.h = 500}
        if (Player2.h < 0) {
            document.getElementById("zprava").innerHTML += "Hráč 1 Vyhrál. Hráč 2 zemřel na místě.<br>";
            end = setTimeout(konec, 2000);
            deathcount ++
            wait = false
        }
        if (Player1.h < 0) {
            document.getElementById("zprava").innerHTML += "Hráč 2 Vyhrál. Hráč 1 zemřel na místě.<br>";
            end = setTimeout(konec, 2000);
            deathcount ++
            wait = false
        }
        var ProcentHealth1 = Math.round(Player1.h/500*100);
        var ProcentHealth2 = Math.round(Player2.h/500*100);
        document.getElementById("pr1").innerText = ProcentHealth1 + "%";
        document.getElementById("pr2").innerText = ProcentHealth2 + "%";
        document.getElementById("p1").value = Player1.h;
        document.getElementById("p2").value = Player2.h;
        Context.fillStyle = "green";
        Context.clearRect(0,0,1840,640);
        for (let i = 0; i < 115; i++) {
            for (let j = 0; j < 30; j++) {
                if (Arena[i][j]) {
                    Context.fillRect(i*16,j*16,16,16);
                } else {}
                
            }
        }
        Context.fillStyle = "rgb(234, 0, 255)";
        Context.fillRect(Player1.x*16+2,Player1.y*16+2,12,12);
        Context.fillStyle = "Red";
        Context.fillRect(Player2.x*16+2,Player2.y*16+2,12,12);
        Context.fillStyle = "blue";
        for (let i = 0; i < Bullets.length; i++) {
            const bullet = Bullets[i];
            Context.fillRect(bullet.x*16+6,bullet.y*16+6,4,4);
        }
        var unvalidbombs = [];
        for (let i = 0; i < Bombs.length; i++) {
            const bomb = Bombs[i];
            Context.fillStyle = "rgb("+(250-bomb.t/2)+","+0+","+0+")";
            Context.fillRect(bomb.x*16+bomb.t/62,bomb.y*16+bomb.t/62,16-bomb.t/31,16-bomb.t/31)
            bomb.t -=1;
            if (bomb.t == 0) {
                Context.fillRect(bomb.x*16-32,bomb.y*16-32,80,80)
                unvalidbombs[unvalidbombs.length] = i;
                for (let r = -2; r < 3; r++) {
                    for (let s = -2; s < 3; s++) {
                        if (Player1.x == bomb.x+s &&Player1.y == bomb.y+r) {
                            document.getElementById("zprava").innerHTML += "Hráč 2 Vyhrál. Hráč 1 zemřel. Byl rozmazán objektem Bomb.<br>";
                            end = setTimeout(konec, 2000);
                            deathcount ++
                            wait = false
                        }
                        if (Player2.x == bomb.x+s &&Player2.y == bomb.y+r) {
                            document.getElementById("zprava").innerHTML += "Hráč 1 Vyhrál. Hráč 2 zemřel. Byl rozmazán objektem Bomb.<br>";
                            end = setTimeout(konec, 2000);
                            deathcount ++
                            wait = false
                        }
                        Arena[bomb.x+s][bomb.y+r] = false;
                        
                    }
                    
                }
            }
        }
        for (let i = 0; i < unvalidbombs.length; i++) {
            Bombs.splice(unvalidbombs[i]-i,1);
            
        }
        for (let i = 0; i < Bullets.length; i++) {
            const bullet = Bullets[i];
            switch (bullet.d) {
                case 0:{
                    bullet.y -= 1;
                    break;
                }

                case 1:{
                    bullet.x -= 1;
                    break;
                }

                case 2:{
                    bullet.y += 1;
                    break;
                }

                case 3:{
                    bullet.x += 1;
                    break;
                }
                
            }
        }
        var unvalidbullets = []
        for (let i = 0; i < Bullets.length; i++) {
            const bullet = Bullets[i];
            if (Arena[bullet.x][bullet.y]) {
                unvalidbullets[unvalidbullets.length] = i;
            }
            if (bullet.x == Player1.x && bullet.y == Player1.y) {
                document.getElementById("zprava").innerHTML += "Hráč 2 Vyhrál. Hráč 1 zemřel. Byl zastřelen objektem Bullet.<br>";
                 end = setTimeout(konec, 2000);
                 deathcount ++
                 wait = false
            }
            if (bullet.x == Player2.x && bullet.y == Player2.y) {
                document.getElementById("zprava").innerHTML += "Hráč 1 Vyhrál. Hráč 2 zemřel. Byl zastřelen objektem Bullet.<br>";
                end = setTimeout(konec, 2000);
                deathcount ++
                wait = false
            }
        }
        for (let i = 0; i < unvalidbullets.length; i++) {
            Bullets.splice(unvalidbullets[i]-i,1);
            
        }
    }
}
function Press(e) {
    if (!wait) {
        if (e.keyCode == 32) {
            if (document.getElementById("level").value == "edit") {
                fightstart()
            } else {Init()}
        } 
    }
    if (wait) {
    console.log(e.keyCode)
    switch (e.keyCode) {
        case 87:{
            Player1.d = 0;
            if (!Arena[Player1.x][Player1.y-1]) {
                Player1.y -=1;
                Player1.d = 0;
                Player1.h +=diff;
            }
            break;
        }
        case 65:{
            Player1.d = 1;
            if (!Arena[Player1.x-1][Player1.y]) {
                Player1.x -=1;
                Player1.d = 1;
                Player1.h +=diff;
            }
            break;
        }
        case 83:{
            Player1.d = 2;
            if (!Arena[Player1.x][Player1.y+1]) {
                Player1.y +=1;
                Player1.h +=diff;
                Player1.d = 2;
            }
            break;
        }
        case 68:{
            Player1.d = 3;
            if (!Arena[Player1.x+1][Player1.y]) {
                Player1.x +=1;
                Player1.d = 3;
                Player1.h +=diff;
            }
            break;
        }
        case 70:{
            if (fight) {
                Shoot(1);
                Player1.h -=diff/2;
                break;
            } 
        }
        case 69:{
            build(1);
            Player1.h -=diff;
            break;
        }
        case 81:{
            destroy(1);
            break;
        }
        case 20:{
            if (fight) {
                bomb(1);
                break; 
            }
        }
    }
    switch (e.keyCode) {
        case 38:{
            Player2.d = 0;
            if (!Arena[Player2.x][Player2.y-1]) {
                Player2.y -=1;
                Player2.d = 0;
                Player2.h +=diff;
            }
            break;
        }
        case 37:{
            Player2.d = 1;
            if (!Arena[Player2.x-1][Player2.y]) {
                Player2.x -=1;
                Player2.d = 1;
                Player2.h +=diff;
            }
            break;
        }
        case 40:{
            Player2.d = 2;
            if (!Arena[Player2.x][Player2.y+1]) {
                Player2.y +=1;
                Player2.d = 2;
                Player2.h +=diff;
            }
            break;
        }
        case 39:{
            Player2.d = 3;
            if (!Arena[Player2.x+1][Player2.y]) {
                Player2.x +=1;
                Player2.d = 3;
                Player2.h +=diff;
            }
            break;
        }
        case 97:{
            if (fight) {
                Shoot(2);
                Player2.h -=diff/2;
                break;
            }
        }
        case 98:{
            build(2);
            Player2.h -=diff;
            break;
        }
        case 99:{
            destroy(2);
            break;
        }
        case 96:{
            if (fight) {
                bomb(2);
                break;
            }
            
        }
    }
}
}
function Shoot(player) {
    if (player == 1) {
        Bullets[Bullets.length] = {"x":Player1.x,"y":Player1.y,"d":Player1.d};
    }
    if (player == 2) {
        Bullets[Bullets.length] = {"x":Player2.x,"y":Player2.y,"d":Player2.d};
    }
}
function build(player) {
    if (player == 1){
        if (Player1.d == 0) {
            Arena[Player1.x][Player1.y-1] = true;
        }
        if (Player1.d == 1) {
            Arena[Player1.x-1][Player1.y] = true;
        }
        if (Player1.d == 2) {
            Arena[Player1.x][Player1.y+1] = true;
        }
        if (Player1.d == 3) {
            Arena[Player1.x+1][Player1.y] = true;
        }
    }
    if (player == 2){
        if (Player2.d == 0) {
            Arena[Player2.x][Player2.y-1] = true;
        }
        if (Player2.d == 1) {
            Arena[Player2.x-1][Player2.y] = true;
        }
        if (Player2.d == 2) {
            Arena[Player2.x][Player2.y+1] = true;
        }
        if (Player2.d == 3) {
            Arena[Player2.x+1][Player2.y] = true;
        }
    }
}
function destroy(player) {
    if (player == 1){
        if (Player1.d == 0) {
            Arena[Player1.x][Player1.y-1] = false;
        }
        if (Player1.d == 1) {
            Arena[Player1.x-1][Player1.y] = false;
        }
        if (Player1.d == 2) {
            Arena[Player1.x][Player1.y+1] = false;
        }
        if (Player1.d == 3) {
            Arena[Player1.x+1][Player1.y] = false;
        }
    }
    if (player == 2){
        if (Player2.d == 0) {
            Arena[Player2.x][Player2.y-1] = false;
        }
        if (Player2.d == 1) {
            Arena[Player2.x-1][Player2.y] = false;
        }
        if (Player2.d == 2) {
            Arena[Player2.x][Player2.y+1] = false;
        }
        if (Player2.d == 3) {
            Arena[Player2.x+1][Player2.y] = false;
        }
    }
}
function bomb(player) {
    if (player == 1) {
        if (Player1.y >1 && Player1.y < 28 && Player1.x >1 && Player1.x < 113)  {
            Bombs[Bombs.length] = {"x":Player1.x,"y":Player1.y,"t":200};
            Player1.h -=diff*2;
        }
    }
    if (player == 2) {
        if (Player2.y >1 && Player2.y < 28 && Player2.x >1 && Player2.x < 113) {
            Bombs[Bombs.length] = {"x":Player2.x,"y":Player2.y,"t":200};
            Player2.h -=diff*2;
        }
    }
}
function konec() {
    Ready = false;
}
function fightstart() {
    wait = true
    fight = true
    Ready = true
    Bullets = [];
    Bombs = [];
    var rx = Math.floor(Math.random() *115);
    var ry = Math.floor(Math.random() *30);
    while (Arena[rx][ry]) {
        var rx = Math.floor(Math.random() *115);
        var ry = Math.floor(Math.random() *30);
    }
    Player1 = {"x":rx,"y":ry,"d":0,"h":500}
    var rx = Math.floor(Math.random() *115);
    var ry = Math.floor(Math.random() *30);
    while (Arena[rx][ry]) {
        var rx = Math.floor(Math.random() *115);
        var ry = Math.floor(Math.random() *30);
    }
    Player2 = {"x":rx,"y":ry,"d":0,"h":500}
}
//w 87 a 65 s 83 d 68 sn 38 sl 37 sd 40 sp 39 mezera 32 jedna 97 f70 q81 dva 98 tri 99