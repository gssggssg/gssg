
const content = document.getElementsByClassName("content")[0];

// 创建一个span
const span = document.createElement('span');
span.classList.add('spanClass');
document.body.appendChild(span);

content.addEventListener('mouseover', function (e) {
  // 兼容性处理
  var event = e || window.event;
  var target = event.target || event.srcElement;
  // 判断是否匹配目标元素
  if (target.nodeName.toLocaleLowerCase() === 'a') {
    let theCurrentStyle = target.getBoundingClientRect()
    span.style.top = `${theCurrentStyle.top + window.scrollY}px`;
    span.style.left = `${theCurrentStyle.left + window.scrollX}px`;
    span.style.width = `${theCurrentStyle.width}px`;
    span.style.height = `${theCurrentStyle.height}px`;
  }
});