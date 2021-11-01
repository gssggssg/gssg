const title = document.getElementsByTagName("h1")[0];
const content = document.querySelector('.content');
const walk = 100;

document.onmousemove = (e) => {

  // let XLeft = title.offsetLeft - e.clientX;
  // let YTop = title.offsetTop - e.clientY;

  const { offsetWidth: width, offsetHeight: height } = content;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const XLeft = Math.round((x / width * walk) - (walk / 2));

  const YTop = Math.round((y / height * walk) - (walk / 2));

  title.style.textShadow = `
    ${XLeft }px ${YTop }px 0 #ff00ffb3,
    -${XLeft }px ${YTop }px 0 #00ffffb3,
    ${XLeft }px -${YTop }px 0 #00ff00b3,
    -${XLeft }px ${YTop }px 0 #0000ffb3
  `
};