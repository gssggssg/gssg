/*
  @ 1. 按下鼠标开始，松开鼠标结束
  @ 2. 按下鼠标开始，线条粗细会一直发生变化 松开鼠标结束
  @ 3. 按下鼠标开始，线条颜色会一直发生变化 松开鼠标结束
onmousedown // 鼠标按下事件
onmousemove　//　鼠标移动事件
onmouseup //鼠标松开事件
*/

let canvasID = document.getElementById('canvas');
var canvas = canvasID.getContext("2d");

canvasID.width = window.innerWidth;       // 设置宽度为窗口宽度
canvasID.height = window.innerHeight;    // 设置高度为窗口高度
canvas.lineJoin = 'round'; //round为圆弧。
canvas.lineCap = 'round'; //round为圆弧。

let hue = 0;
let lineWidthData = 100;
let direction = false;

// 注册 全局鼠标按下事件
window.onmousedown = (e) => {

  [lastX, lastY] = [e.offsetX, e.offsetY];

  // 注册 全局鼠标移动事件
  window.onmousemove = (e1) => {

    canvas.strokeStyle = `hsl(${hue}, 100%, 50%)`;//更改顏色。
    canvas.beginPath();
    canvas.moveTo(lastX, lastY);
    canvas.lineTo(e1.offsetX, e1.offsetY); //畫到的位置。
    canvas.stroke();
    [lastX, lastY] = [e1.offsetX, e1.offsetY];

    if (canvas.lineWidth >= 100 || canvas.lineWidth <= 1) {
      direction = !direction;
    }

    if (direction) {
      canvas.lineWidth++;
    } else {
      canvas.lineWidth--;
    }

    hue++;
    if (hue >= 360) {
      hue = 0;
    }

  }
}

// 注册 全局鼠标松开事件
window.onmouseup = (e) => {
  window.onmousemove = null;
}