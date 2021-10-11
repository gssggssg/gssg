//操作按钮
const Spacing = document.getElementById("Spacing")
const Blur = document.getElementById("Blur")
const Color = document.getElementById("Color")
//
const responseImg = document.getElementById("responseImg")

Spacing.onclick = () =>{
  responseImg.style.borderWidth = `${Spacing.value}px`
}

Blur.onclick = () =>{
  responseImg.style.filter = `blur(${Blur.value}px)`
}

Color.onchange = () =>{
  responseImg.style.borderColor = `${Color.value}`
}

//初始化
Spacing.onclick();
Blur.onclick();
Color.onchange();