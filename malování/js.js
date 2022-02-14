var Mouse = false;
var Canvas;
var Context;
var PrevPosition = null;
var RectStart = null;

function Init() {
    Canvas = document.getElementById('canvas');
    Context = Canvas.getContext('2d');
}

function MouseDraw(event) {
    Context.fillStyle = document.getElementById('color').value;
    Context.strokeStyle = document.getElementById('color').value;
    Context.lineWidth = parseInt(document.getElementById('size').value);

    if (Mouse) {
        if (parseInt(document.getElementById('tool').value) == 1) {
            if (PrevPosition != null) {
                Context.beginPath();
                Context.moveTo(PrevPosition[0], PrevPosition[1]);
                Context.lineTo(event.layerX, event.layerY);
                Context.stroke();
                Context.closePath();
            } else {
                Context.fillRect(event.layerX, event.layerY, 1, 1);
            }

            RectStart = null;
        } else {
            if (RectStart == null) {
                RectStart = [event.layerX, event.layerY];
            }
        }

        PrevPosition = [event.layerX, event.layerY]

    } else {
        PrevPosition = null;

        if (parseInt(document.getElementById('tool').value) != 1) {
            if (RectStart != null) {
                var x1 = RectStart[0]; 
                var y1 = RectStart[1];
                var x2 = event.layerX;
                var y2 = event.layerY;
                var p;

                if (x1 > x2) {p = x1; x1 = x2; x2 = p};
                if (y1 > y2) {p = y1; y1 = y2; y2 = p};

                if (parseInt(document.getElementById('tool').value) == 2) {
                    Context.clearRect(x1, y1, (x2 - x1), (y2 - y1));
                } else {
                    Context.fillRect(x1, y1, (x2 - x1), (y2 - y1));
                }

                RectStart = null;
            }
        }
    }
}