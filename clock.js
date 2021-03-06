var clock = document.getElementById('clock');
var ctx = clock.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
function drawBackground() {
    ctx.save();
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(0, 0, r - 5, 2 * Math.PI, false)
    ctx.stroke();
    var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = "20px Arial";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hourNumbers.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30);
        var y = Math.sin(rad) * (r - 30);
        ctx.fillText(number, x, y);
    });

    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18);
        var y = Math.sin(rad) * (r - 18);
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
        }
        else {
            ctx.fillStyle = '#ccc';
        }
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}
function drawHour(hour, minute) {
    ctx.save();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * minute;
    ctx.beginPath();
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
}
function drawMinute(minute) {
    ctx.save();
    var rad = 2 * Math.PI / 60 * minute;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r + 60);
    ctx.stroke();
    ctx.restore();
}
function drawSecond(second) {
    ctx.save();
    var rad = 2 * Math.PI / 60 * second;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.fillStyle = 'red';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.moveTo(-2, 20);
    ctx.lineTo(2, 20);
    ctx.lineTo(1, -r + 18);
    ctx.lineTo(-1, -r + 18);
    ctx.fill();
    ctx.restore();
}
function drawDot() {
    ctx.beginPath();wcwcwc
    ctx.fillStyle = "#FFF";
    ctx.arc(0, 0, 3, 0, 2 * Math.PI, false);
    ctx.fill();
}
function draw() {
    ctx.clearRect(0, 0, width, height);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    drawBackground();
    drawHour(hour, minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
}
draw();
setInterval(draw, 1000);
