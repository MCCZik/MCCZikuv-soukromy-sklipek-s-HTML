var PočetPříkladů;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var p9;
var p10;
var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;
var v8;
var v9;
var v10;
var uv1;
var uv2;
var uv3;
var uv4;
var uv5;
var uv6;
var uv7;
var uv8;
var uv9;
var uv10;
var znamenko;
var Dobře = 0;
var Špatně = 0;

function Gen() {
    PočetPříkladů = document.getElementById("pocetprikladu").value;
    if (PočetPříkladů == 1) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
    }
    if (PočetPříkladů == 2) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
    }
    if (PočetPříkladů == 3) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
        var P3Č1 = Math.floor(Math.random() *20+1);
        var P3Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v3 = (P3Č1 + P3Č2);
        }
        if (znamenko == 2) {
            v3 = (P3Č1 - P3Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v3 = (P3Č1 * P3Č2);
            znamenko = "*";
        }
        p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
        uv3 = document.getElementById("v3").value;
    }
    if (PočetPříkladů == 4) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
        var P3Č1 = Math.floor(Math.random() *20+1);
        var P3Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v3 = (P3Č1 + P3Č2);
        }
        if (znamenko == 2) {
            v3 = (P3Č1 - P3Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v3 = (P3Č1 * P3Č2);
            znamenko = "*";
        }
        p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
        uv3 = document.getElementById("v3").value;
        var P4Č1 = Math.floor(Math.random() *20+1);
        var P4Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v4 = (P4Č1 + P4Č2);
        }
        if (znamenko == 2) {
            v4 = (P4Č1 - P4Č2);
            znamenko = "-";
        }
        if (znamenko == 4) {
            v4 = (P4Č1 * P4Č2);
            znamenko = "*";
        }
        p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
        uv4 = document.getElementById("v4").value;
    }
    if (PočetPříkladů == 5) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
        var P3Č1 = Math.floor(Math.random() *20+1);
        var P3Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v3 = (P3Č1 + P3Č2);
        }
        if (znamenko == 2) {
            v3 = (P3Č1 - P3Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v3 = (P3Č1 * P3Č2);
            znamenko = "*";
        }
        p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
        uv3 = document.getElementById("v3").value;
        var P4Č1 = Math.floor(Math.random() *20+1);
        var P4Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v4 = (P4Č1 + P4Č2);
        }
        if (znamenko == 2) {
            v4 = (P4Č1 - P4Č2);
            znamenko = "-";
        }
        if (znamenko == 4) {
            v4 = (P4Č1 * P4Č2);
            znamenko = "*";
        }
        p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
        uv4 = document.getElementById("v4").value;
        var P5Č1 = Math.floor(Math.random() *20+1);
        var P5Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v5 = (P5Č1 + P5Č2);
        }
        if (znamenko == 2) {
            v5 = (P5Č1 - P5Č2);
            znamenko = "-";
        }
        if (znamenko == 5) {
            v5 = (P5Č1 * P5Č2);
            znamenko = "*";
        }
        p5 = document.getElementById("p5").innerText = P5Č1 + znamenko + P5Č2;
        uv5 = document.getElementById("v5").value;
    }
    if (PočetPříkladů == 6) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
        var P3Č1 = Math.floor(Math.random() *20+1);
        var P3Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v3 = (P3Č1 + P3Č2);
        }
        if (znamenko == 2) {
            v3 = (P3Č1 - P3Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v3 = (P3Č1 * P3Č2);
            znamenko = "*";
        }
        p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
        uv3 = document.getElementById("v3").value;
        var P4Č1 = Math.floor(Math.random() *20+1);
        var P4Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v4 = (P4Č1 + P4Č2);
        }
        if (znamenko == 2) {
            v4 = (P4Č1 - P4Č2);
            znamenko = "-";
        }
        if (znamenko == 4) {
            v4 = (P4Č1 * P4Č2);
            znamenko = "*";
        }
        p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
        uv4 = document.getElementById("v4").value;
        var P5Č1 = Math.floor(Math.random() *20+1);
        var P5Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v5 = (P5Č1 + P5Č2);
        }
        if (znamenko == 2) {
            v5 = (P5Č1 - P5Č2);
            znamenko = "-";
        }
        if (znamenko == 5) {
            v5 = (P5Č1 * P5Č2);
            znamenko = "*";
        }
        p5 = document.getElementById("p5").innerText = P5Č1 + znamenko + P5Č2;
        uv5 = document.getElementById("v5").value;
        var P6Č1 = Math.floor(Math.random() *20+1);
        var P6Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v6 = (P6Č1 + P6Č2);
        }
        if (znamenko == 2) {
            v6 = (P6Č1 - P6Č2);
            znamenko = "-";
        }
        if (znamenko == 6) {
            v6 = (P6Č1 * P6Č2);
            znamenko = "*";
        }
        p6 = document.getElementById("p6").innerText = P6Č1 + znamenko + P6Č2;
        uv6 = document.getElementById("v6").value;
    }
    if (PočetPříkladů == 7) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
        var P3Č1 = Math.floor(Math.random() *20+1);
        var P3Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v3 = (P3Č1 + P3Č2);
        }
        if (znamenko == 2) {
            v3 = (P3Č1 - P3Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v3 = (P3Č1 * P3Č2);
            znamenko = "*";
        }
        p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
        uv3 = document.getElementById("v3").value;
        var P4Č1 = Math.floor(Math.random() *20+1);
        var P4Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v4 = (P4Č1 + P4Č2);
        }
        if (znamenko == 2) {
            v4 = (P4Č1 - P4Č2);
            znamenko = "-";
        }
        if (znamenko == 4) {
            v4 = (P4Č1 * P4Č2);
            znamenko = "*";
        }
        p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
        uv4 = document.getElementById("v4").value;
        var P5Č1 = Math.floor(Math.random() *20+1);
        var P5Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v5 = (P5Č1 + P5Č2);
        }
        if (znamenko == 2) {
            v5 = (P5Č1 - P5Č2);
            znamenko = "-";
        }
        if (znamenko == 5) {
            v5 = (P5Č1 * P5Č2);
            znamenko = "*";
        }
        p5 = document.getElementById("p5").innerText = P5Č1 + znamenko + P5Č2;
        uv5 = document.getElementById("v5").value;
        var P6Č1 = Math.floor(Math.random() *20+1);
        var P6Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v6 = (P6Č1 + P6Č2);
        }
        if (znamenko == 2) {
            v6 = (P6Č1 - P6Č2);
            znamenko = "-";
        }
        if (znamenko == 6) {
            v6 = (P6Č1 * P6Č2);
            znamenko = "*";
        }
        p6 = document.getElementById("p6").innerText = P6Č1 + znamenko + P6Č2;
        uv6 = document.getElementById("v6").value;
        var P7Č1 = Math.floor(Math.random() *20+1);
        var P7Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v7 = (P7Č1 + P7Č2);
        }
        if (znamenko == 2) {
            v7 = (P7Č1 - P7Č2);
            znamenko = "-";
        }
        if (znamenko == 7) {
            v7 = (P7Č1 * P7Č2);
            znamenko = "*";
        }
        p7 = document.getElementById("p7").innerText = P7Č1 + znamenko + P7Č2;
        uv7 = document.getElementById("v7").value;
    }
    if (PočetPříkladů == 8) {
        znamenko = Math.floor(Math.random() *3+1);
        var P1Č1 = Math.floor(Math.random() *20+1);
        var P1Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v1 = (P1Č1 + P1Č2);
        }
        if (znamenko == 2) {
            v1 = (P1Č1 - P1Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v1 = (P1Č1 * P1Č2);
            znamenko = "*";
        }
        p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
        uv1 = document.getElementById("v1").value;
        znamenko = Math.floor(Math.random() *3+1);
        var P2Č1 = Math.floor(Math.random() *20+1);
        var P2Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v2 = (P2Č1 + P2Č2);
        }
        if (znamenko == 2) {
            v2 = (P2Č1 - P2Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v2 = (P2Č1 * P2Č2);
            znamenko = "*";
        }
        p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
        uv2 = document.getElementById("v2").value;
        var P3Č1 = Math.floor(Math.random() *20+1);
        var P3Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v3 = (P3Č1 + P3Č2);
        }
        if (znamenko == 2) {
            v3 = (P3Č1 - P3Č2);
            znamenko = "-";
        }
        if (znamenko == 3) {
            v3 = (P3Č1 * P3Č2);
            znamenko = "*";
        }
        p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
        uv3 = document.getElementById("v3").value;
        var P4Č1 = Math.floor(Math.random() *20+1);
        var P4Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v4 = (P4Č1 + P4Č2);
        }
        if (znamenko == 2) {
            v4 = (P4Č1 - P4Č2);
            znamenko = "-";
        }
        if (znamenko == 4) {
            v4 = (P4Č1 * P4Č2);
            znamenko = "*";
        }
        p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
        uv4 = document.getElementById("v4").value;
        var P5Č1 = Math.floor(Math.random() *20+1);
        var P5Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v5 = (P5Č1 + P5Č2);
        }
        if (znamenko == 2) {
            v5 = (P5Č1 - P5Č2);
            znamenko = "-";
        }
        if (znamenko == 5) {
            v5 = (P5Č1 * P5Č2);
            znamenko = "*";
        }
        p5 = document.getElementById("p5").innerText = P5Č1 + znamenko + P5Č2;
        uv5 = document.getElementById("v5").value;
        var P6Č1 = Math.floor(Math.random() *20+1);
        var P6Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v6 = (P6Č1 + P6Č2);
        }
        if (znamenko == 2) {
            v6 = (P6Č1 - P6Č2);
            znamenko = "-";
        }
        if (znamenko == 6) {
            v6 = (P6Č1 * P6Č2);
            znamenko = "*";
        }
        p6 = document.getElementById("p6").innerText = P6Č1 + znamenko + P6Č2;
        uv6 = document.getElementById("v6").value;
        var P7Č1 = Math.floor(Math.random() *20+1);
        var P7Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v7 = (P7Č1 + P7Č2);
        }
        if (znamenko == 2) {
            v7 = (P7Č1 - P7Č2);
            znamenko = "-";
        }
        if (znamenko == 7) {
            v7 = (P7Č1 * P7Č2);
            znamenko = "*";
        }
        p7 = document.getElementById("p7").innerText = P7Č1 + znamenko + P7Č2;
        uv7 = document.getElementById("v7").value;
        var P8Č1 = Math.floor(Math.random() *20+1);
        var P8Č2 = Math.floor(Math.random() *10+1);
        if (znamenko == 1) {
            znamenko = "+";
            v8 = (P8Č1 + P8Č2);
        }
        if (znamenko == 2) {
            v8 = (P8Č1 - P8Č2);
            znamenko = "-";
        }
        if (znamenko == 8) {
            v8 = (P8Č1 * P8Č2);
            znamenko = "*";
        }
        p8 = document.getElementById("p8").innerText = P8Č1 + znamenko + P8Č2;
        uv8 = document.getElementById("v8").value;
        if (PočetPříkladů == 9) {
            znamenko = Math.floor(Math.random() *3+1);
            var P1Č1 = Math.floor(Math.random() *20+1);
            var P1Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v1 = (P1Č1 + P1Č2);
            }
            if (znamenko == 2) {
                v1 = (P1Č1 - P1Č2);
                znamenko = "-";
            }
            if (znamenko == 3) {
                v1 = (P1Č1 * P1Č2);
                znamenko = "*";
            }
            p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
            uv1 = document.getElementById("v1").value;
            znamenko = Math.floor(Math.random() *3+1);
            var P2Č1 = Math.floor(Math.random() *20+1);
            var P2Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v2 = (P2Č1 + P2Č2);
            }
            if (znamenko == 2) {
                v2 = (P2Č1 - P2Č2);
                znamenko = "-";
            }
            if (znamenko == 3) {
                v2 = (P2Č1 * P2Č2);
                znamenko = "*";
            }
            p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
            uv2 = document.getElementById("v2").value;
            var P3Č1 = Math.floor(Math.random() *20+1);
            var P3Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v3 = (P3Č1 + P3Č2);
            }
            if (znamenko == 2) {
                v3 = (P3Č1 - P3Č2);
                znamenko = "-";
            }
            if (znamenko == 3) {
                v3 = (P3Č1 * P3Č2);
                znamenko = "*";
            }
            p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
            uv3 = document.getElementById("v3").value;
            var P4Č1 = Math.floor(Math.random() *20+1);
            var P4Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v4 = (P4Č1 + P4Č2);
            }
            if (znamenko == 2) {
                v4 = (P4Č1 - P4Č2);
                znamenko = "-";
            }
            if (znamenko == 4) {
                v4 = (P4Č1 * P4Č2);
                znamenko = "*";
            }
            p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
            uv4 = document.getElementById("v4").value;
            var P5Č1 = Math.floor(Math.random() *20+1);
            var P5Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v5 = (P5Č1 + P5Č2);
            }
            if (znamenko == 2) {
                v5 = (P5Č1 - P5Č2);
                znamenko = "-";
            }
            if (znamenko == 5) {
                v5 = (P5Č1 * P5Č2);
                znamenko = "*";
            }
            p5 = document.getElementById("p5").innerText = P5Č1 + znamenko + P5Č2;
            uv5 = document.getElementById("v5").value;
            var P6Č1 = Math.floor(Math.random() *20+1);
            var P6Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v6 = (P6Č1 + P6Č2);
            }
            if (znamenko == 2) {
                v6 = (P6Č1 - P6Č2);
                znamenko = "-";
            }
            if (znamenko == 6) {
                v6 = (P6Č1 * P6Č2);
                znamenko = "*";
            }
            p6 = document.getElementById("p6").innerText = P6Č1 + znamenko + P6Č2;
            uv6 = document.getElementById("v6").value;
            var P7Č1 = Math.floor(Math.random() *20+1);
            var P7Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v7 = (P7Č1 + P7Č2);
            }
            if (znamenko == 2) {
                v7 = (P7Č1 - P7Č2);
                znamenko = "-";
            }
            if (znamenko == 7) {
                v7 = (P7Č1 * P7Č2);
                znamenko = "*";
            }
            p7 = document.getElementById("p7").innerText = P7Č1 + znamenko + P7Č2;
            uv7 = document.getElementById("v7").value;
            var P8Č1 = Math.floor(Math.random() *20+1);
            var P8Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v8 = (P8Č1 + P8Č2);
            }
            if (znamenko == 2) {
                v8 = (P8Č1 - P8Č2);
                znamenko = "-";
            }
            if (znamenko == 8) {
                v8 = (P8Č1 * P8Č2);
                znamenko = "*";
            }
            p8 = document.getElementById("p8").innerText = P8Č1 + znamenko + P8Č2;
            uv8 = document.getElementById("v8").value;
            var P9Č1 = Math.floor(Math.random() *20+1);
            var P9Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v9 = (P9Č1 + P9Č2);
            }
            if (znamenko == 2) {
                v9 = (P9Č1 - P9Č2);
                znamenko = "-";
            }
            if (znamenko == 9) {
                v9 = (P9Č1 * P9Č2);
                znamenko = "*";
            }
            p9 = document.getElementById("p9").innerText = P9Č1 + znamenko + P9Č2;
            uv9 = document.getElementById("v9").value;
        }
        if (PočetPříkladů == 10) {
            znamenko = Math.floor(Math.random() *3+1);
            var P1Č1 = Math.floor(Math.random() *20+1);
            var P1Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v1 = (P1Č1 + P1Č2);
            }
            if (znamenko == 2) {
                v1 = (P1Č1 - P1Č2);
                znamenko = "-";
            }
            if (znamenko == 3) {
                v1 = (P1Č1 * P1Č2);
                znamenko = "*";
            }
            p1 = document.getElementById("p1").innerText = P1Č1 + znamenko + P1Č2;
            uv1 = document.getElementById("v1").value;
            znamenko = Math.floor(Math.random() *3+1);
            var P2Č1 = Math.floor(Math.random() *20+1);
            var P2Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v2 = (P2Č1 + P2Č2);
            }
            if (znamenko == 2) {
                v2 = (P2Č1 - P2Č2);
                znamenko = "-";
            }
            if (znamenko == 3) {
                v2 = (P2Č1 * P2Č2);
                znamenko = "*";
            }
            p2 = document.getElementById("p2").innerText = P2Č1 + znamenko + P2Č2;
            uv2 = document.getElementById("v2").value;
            var P3Č1 = Math.floor(Math.random() *20+1);
            var P3Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v3 = (P3Č1 + P3Č2);
            }
            if (znamenko == 2) {
                v3 = (P3Č1 - P3Č2);
                znamenko = "-";
            }
            if (znamenko == 3) {
                v3 = (P3Č1 * P3Č2);
                znamenko = "*";
            }
            p3 = document.getElementById("p3").innerText = P3Č1 + znamenko + P3Č2;
            uv3 = document.getElementById("v3").value;
            var P4Č1 = Math.floor(Math.random() *20+1);
            var P4Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v4 = (P4Č1 + P4Č2);
            }
            if (znamenko == 2) {
                v4 = (P4Č1 - P4Č2);
                znamenko = "-";
            }
            if (znamenko == 4) {
                v4 = (P4Č1 * P4Č2);
                znamenko = "*";
            }
            p4 = document.getElementById("p4").innerText = P4Č1 + znamenko + P4Č2;
            uv4 = document.getElementById("v4").value;
            var P5Č1 = Math.floor(Math.random() *20+1);
            var P5Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v5 = (P5Č1 + P5Č2);
            }
            if (znamenko == 2) {
                v5 = (P5Č1 - P5Č2);
                znamenko = "-";
            }
            if (znamenko == 5) {
                v5 = (P5Č1 * P5Č2);
                znamenko = "*";
            }
            p5 = document.getElementById("p5").innerText = P5Č1 + znamenko + P5Č2;
            uv5 = document.getElementById("v5").value;
            var P6Č1 = Math.floor(Math.random() *20+1);
            var P6Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v6 = (P6Č1 + P6Č2);
            }
            if (znamenko == 2) {
                v6 = (P6Č1 - P6Č2);
                znamenko = "-";
            }
            if (znamenko == 6) {
                v6 = (P6Č1 * P6Č2);
                znamenko = "*";
            }
            p6 = document.getElementById("p6").innerText = P6Č1 + znamenko + P6Č2;
            uv6 = document.getElementById("v6").value;
            var P7Č1 = Math.floor(Math.random() *20+1);
            var P7Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v7 = (P7Č1 + P7Č2);
            }
            if (znamenko == 2) {
                v7 = (P7Č1 - P7Č2);
                znamenko = "-";
            }
            if (znamenko == 7) {
                v7 = (P7Č1 * P7Č2);
                znamenko = "*";
            }
            p7 = document.getElementById("p7").innerText = P7Č1 + znamenko + P7Č2;
            uv7 = document.getElementById("v7").value;
            var P8Č1 = Math.floor(Math.random() *20+1);
            var P8Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v8 = (P8Č1 + P8Č2);
            }
            if (znamenko == 2) {
                v8 = (P8Č1 - P8Č2);
                znamenko = "-";
            }
            if (znamenko == 8) {
                v8 = (P8Č1 * P8Č2);
                znamenko = "*";
            }
            p8 = document.getElementById("p8").innerText = P8Č1 + znamenko + P8Č2;
            uv8 = document.getElementById("v8").value;
            var P9Č1 = Math.floor(Math.random() *20+1);
            var P9Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v9 = (P9Č1 + P9Č2);
            }
            if (znamenko == 2) {
                v9 = (P9Č1 - P9Č2);
                znamenko = "-";
            }
            if (znamenko == 9) {
                v9 = (P9Č1 * P9Č2);
                znamenko = "*";
            }
            p9 = document.getElementById("p9").innerText = P9Č1 + znamenko + P9Č2;
            uv9 = document.getElementById("v9").value;
            var P10Č1 = Math.floor(Math.random() *20+1);
            var P10Č2 = Math.floor(Math.random() *10+1);
            if (znamenko == 1) {
                znamenko = "+";
                v10 = (P10Č1 + P10Č2);
            }
            if (znamenko == 2) {
                v10 = (P10Č1 - P10Č2);
                znamenko = "-";
            }
            if (znamenko == 10) {
                v10 = (P10Č1 * P10Č2);
                znamenko = "*";
            }
            p10 = document.getElementById("p10").innerText = P10Č1 + znamenko + P10Č2;
            uv10 = document.getElementById("v10").value;
        }
    }
}











function Check() {
    if (uv1 == v1) {
        Dobře += 1;
    }
    if (uv2 == v2) {
        Dobře += 1;
    }
    if (uv3 == v3) {
        Dobře += 1;
    }
    if (uv4 == v4) {
        Dobře += 1;
    }
    if (uv5 == v5) {
        Dobře += 1;
    }
    if (uv6 == v6) {
        Dobře += 1;
    }
    if (uv7 == v7) {
        Dobře += 1;
    }
    if (uv8 == v8) {
        Dobře += 1;
    }
    if (uv9 == v9) {
        Dobře += 1;
    }
    if (uv10 == v10) {
        Dobře += 1;
    }
}