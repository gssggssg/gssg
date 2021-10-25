const pressed = [];
const secretCode = 'mima';

window.addEventListener('keyup', (e) => {

  // 将键盘输入的内容添加到 pressed 数组末尾
  // push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。  
  pressed.push(e.key);

  // 需要规定长度，
  if (secretCode.length < pressed.length) {
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  }
  console.log(pressed)

  if (pressed.join("").includes(secretCode)) {
    console.log("密码输入成功")
    alert("密码输入成功")
  }
})

