//操作按钮
const Spacing = document.getElementById("Spacing")
const Blur = document.getElementById("Blur")
const Color = document.getElementById("Color")
//
const responseImg = document.getElementById("responseImg")

Spacing.oninput = () =>{
  responseImg.style.padding = `${Spacing.value}px`
}

Blur.oninput = () =>{
  responseImg.style.filter = `blur(${Blur.value}px)`
}

Color.oninput = () =>{
  responseImg.style.backgroundColor = `${Color.value}`
}

//初始化
Spacing.oninput();
Blur.oninput();
Color.oninput();