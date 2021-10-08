const listButton = document.getElementById("listButton")
const listLi = listButton.getElementsByTagName("li")

let arr = [65, 83, 68, 70, 71, 72, 74, 75, 76]

//给全局绑定键盘输入按下事件
document.onkeydown = keyDown;

//给全局绑定键盘松开事件
document.onkeyup = keyUP;

function keyDown(event) {

  event = event || window.event;  // 标准化事件对象  // 做兼容
  // console.log(event.keyCode)
  switch (event.keyCode) {  // 获取当前按下键盘键的编码
    case 65:
      listLi[0].className = "active"
      break;
    case 83:
      listLi[1].className = "active"
      break;
    case 68:
      listLi[2].className = "active"
      break;
    case 70:
      listLi[3].className = "active"
      break;
    case 71:
      listLi[4].className = "active"
      break;
    case 72:
      listLi[5].className = "active"
      break;
    case 74:
      listLi[6].className = "active"
      break;
    case 75:
      listLi[7].className = "active"
      break;
    case 76:
      listLi[8].className = "active"
      break;
  }
}

function keyUP(event) {

  event = event || window.event;  // 标准化事件对象  // 做兼容

  let arrIndex = arr.indexOf(event.keyCode)

  listLi[arrIndex].className = null

}
