const contentLi = document.getElementsByClassName("content")[0].querySelectorAll("li");

const contentInput = document.getElementsByClassName("content")[0].querySelectorAll("input");

const contentSpan = document.getElementsByClassName("content")[0].getElementsByTagName("span");

//给全局绑定键盘输入按下事件
document.onkeydown = function keyDown(event) {
  event.shiftKey ? contentFun(1) : null
};

//给全局绑定键盘松开事件
document.onkeyup = () => { contentFun(0) };

function contentFun(key) {

  contentInput.forEach((item, index) => {
    item.onchange = (event) => {
      console.log(this.shiftKey)
      if (key === 1) {
        contentInput.forEach((item1, index1) => {
          if (index1 >= index) {
            item1.checked = true;
            contentSpan[index1].style.textDecoration = "line-through";
            contentSpan[index1].style.backgroundColor = "#3677ad3f";
          }
        })
      }
      contentSpan[index].style.textDecoration = item.checked ? "line-through" : null;
      contentSpan[index].style.backgroundColor = item.checked ? "#3677ad3f" : null;
    }
  });
}

contentFun()