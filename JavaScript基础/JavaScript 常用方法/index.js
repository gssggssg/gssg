const lists = document.querySelectorAll(".lists");
const exampleUl = document.querySelectorAll(".example");

/*
    addLi 添加li到页面ul中的方法
    三个参数 
    1. title // 标题
    2. initialValue  // 初始值
    3. handlingMethod  // 处理方法
*/
function addLi(arrayId, title, initialValue, handlingMethod, dataTypeUl) {
  // 1. 创建一个li 
  let newLi = document.createElement("li");
  newLi.id = arrayId;
  newLi.innerHTML =
    `
    <span class="title">${title}</span>
    <i class="putAway">收起</i>
    初始值 ：<code>${initialValue}</code>
    操作 ：<pre>
${handlingMethod}</pre>
    <div class="buttons">
      <button name="">运行</button>
      <button name="">重置</button>
    </div>
    <div class="result">
      返回值 ：<code>
      </code>
    </div>
    <div class="changevalue">
    操作后的初始值 ：<code>
    </code>
  </div>
    `;
  exampleUl[dataTypeUl].appendChild(newLi);
}

/*
    butFn 运行与重置按钮点击事件
    三个参数 
    1. index // 索引
    2. result  // 结果
*/
function butFn(index, arr, initialValue, result, title, dataTypeUl) {
  const buttons = exampleUl[dataTypeUl].getElementsByClassName('buttons')[index].getElementsByTagName('button');
  const currentLi = exampleUl[dataTypeUl].getElementsByTagName('li')[index];
  // 返回值 <code>
  const currentResult = currentLi.getElementsByClassName('result')[0].getElementsByTagName('code')[0];
  // 操作后的初始值 <code>
  const currentValue = currentLi.getElementsByClassName('changevalue')[0].getElementsByTagName('code')[0];
  buttons[0].onclick = () => {
    currentResult.innerText = result;
    currentValue.innerText = `[${arr}]`;
    console.log(`第${index + 1}个-->${title} :`, result);
  }
  buttons[1].onclick = () => {
    currentResult.innerText = null;
    currentValue.innerText = initialValue;
  }
}

// 点击展开与收起操作
exampleUl.forEach((item) => {
  item.addEventListener('click', function (e) {
    if (e.target.nodeName.toLowerCase() === 'i') {
      if (e.target.parentNode.offsetHeight <= 60) {
        e.target.parentNode.style.height = null;
        e.target.innerText = "收起";
        return;
      }
      e.target.parentNode.style.height = `${40}px`;
      e.target.innerText = "展开";
    }
  })
});