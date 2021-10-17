const listButton = document.getElementById("listButton")
const listLi = listButton.getElementsByTagName("li")

const listAudio = document.getElementById("listAudio")
const listAudios = listAudio.getElementsByTagName("audio")

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

      listAudios[0].currentTime = 0
      listLi[0].className = "active";
      listAudios[0].currentTime = 0;
      listAudios[0].play();
      break;
    case 83:
      listAudios[1].currentTime = 0
      listLi[1].className = "active"
      listAudios[1].currentTime = 0;
      listAudios[1].play()
      break;
    case 68:
      listAudios[2].currentTime = 0
      listLi[2].className = "active"
      listAudios[2].currentTime = 0;
      listAudios[2].play()
      break;
    case 70:
      listAudios[3].currentTime = 0
      listLi[3].className = "active"
      listAudios[3].currentTime = 0;
      listAudios[3].play()
      break;
    case 71:
      listAudios[4].currentTime = 0
      listLi[4].className = "active"
      listAudios[4].currentTime = 0;
      listAudios[4].play()
      break;
    case 72:
      listAudios[5].currentTime = 0
      listLi[5].className = "active"
      listAudios[5].currentTime = 0;
      listAudios[5].play()
      break;
    case 74:
      listAudios[6].currentTime = 0
      listLi[6].className = "active"
      listAudios[6].currentTime = 0;
      listAudios[6].play()
      break;
    case 75:
      listAudios[7].currentTime = 0

      listLi[7].className = "active"
      listAudios[7].currentTime = 0;
      listAudios[7].play()
      break;
    case 76:
      listAudios[8].currentTime = 0

      listLi[8].className = "active"
      listAudios[8].currentTime = 0;
      listAudios[8].play()
      break;
  }
}

function keyUP(event) {

  event = event || window.event;  // 标准化事件对象  // 做兼容

  let arrIndex = arr.indexOf(event.keyCode)

  if(arrIndex!==-1){
    listLi[arrIndex].className = null
  }

}