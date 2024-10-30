/*
// 鼠标按下
The mouse click
// 鼠标移动
The mouse moves
// 鼠标松开
Release the mouse
// 鼠标距离左边距离
Mouse left distance
// 鼠标距离左边距离
item left distance
*/

const items = document.getElementsByClassName("items")[0];

let mouseLeftDistance = 0;
let itemLeftDistance = 0;

// 鼠标按下
function theMouseClick(e) {
  // 兼容性
  const event = window.event || e;
  // 判断是否含有 item 类名
  if (event.target.className.indexOf('item ') > -1) {
    mouseLeftDistance = event.pageX - items.offsetLeft;
    itemLeftDistance = items.scrollLeft;
    items.classList.add('active');
    items.addEventListener('mousemove', theMouseMoves);
  }
}

// 鼠标滑动
function theMouseMoves(e) {
  // 兼容性
  const event = window.event || e;
  if (event.target.className.indexOf('item ') > -1) {
    event.preventDefault();
    items.scrollLeft = itemLeftDistance + +mouseLeftDistance - event.pageX;
  }
}

// 鼠标松开
function releaseTheMouse() {
  items.classList.remove('active');
  items.removeEventListener('mousemove', theMouseMoves);
}

items.addEventListener('mousedown', theMouseClick);
window.addEventListener('mouseup', releaseTheMouse);