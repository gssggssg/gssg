const contentLi = document.getElementsByClassName("content")[0].getElementsByTagName("li");

const contentInput = document.getElementsByClassName("content")[0].getElementsByTagName("input");

const contentSpan = document.getElementsByClassName("content")[0].getElementsByTagName("span");

console.log(document.onkeydown)
//给全局绑定键盘输入按下事件

document.onkeydown = function keyDown(event) {
  event.keyCode === 16 ? contentFun(1) : null
};

//给全局绑定键盘松开事件
document.onkeyup = ()=>{contentFun(0)};

function contentFun(key) {
  for (let NumI = 0; NumI < contentLi.length; NumI++) {
    contentInput[NumI].onchange = function () {
      if (key === 1) {
        for (let Numj = NumI; Numj < contentLi.length; Numj++) {
          contentInput[Numj].checked = true;
          contentSpan[Numj].style.backgroundColor = this.checked ? "#3677ad3f" : null
          contentSpan[Numj].style.textDecoration = this.checked ? "line-through" : null
        }
      }
      contentSpan[NumI].style.backgroundColor = this.checked ? "#3677ad3f" : null
      contentSpan[NumI].style.textDecoration = this.checked ? "line-through" : null
    }
  }
}
contentFun()



