const lists = document.querySelectorAll(".lists");
const exampleUl = document.querySelectorAll(".example");
const operationMetho = [
  {
    type: 'array',
    data: [],
    initData: [],
  },
  {
    type: 'date',
    data: [],
    initData: [],
  },
  {
    type: 'math',
    data: [],
    initData: [],
  },
  {
    type: 'string',
    data: [],
    initData: [],
  },
];

/*
    addLi 添加li到页面ul中的方法
    三个参数 
    1. id // id
    2. title // 标题
    3. initialValue  // 初始值
    4. handlingMethod  // 处理方法
    5. dataTypeUl // 数据类型Ul
*/
function addLi(id, title, initialValue, handlingMethod, dataTypeUl) {
  // 1. 创建一个li 
  const newLi = document.createElement("li");
  newLi.id = id;
  newLi.innerHTML =
    `
    <span class="title">${title}</span>
    <i class="putAway">收起</i>
    初始值 ：<textarea name="initialValue" readonly="readonly">${initialValue}</textarea>
    <pre>${initialValue}</pre>
    操作 ：<textarea name="handlingMethod" readonly="readonly">
${handlingMethod}</textarea>
<pre>${handlingMethod}</pre>
    <div class="buttons">
      <button name="">运行</button>
      <button name="">重置</button>
    </div>
    <div class="result">
      返回值 ：<textarea name="results" readonly="readonly">
      </textarea>
      <pre></pre>
    </div>
    <div class="changevalue">
    操作后的初始值 ：<textarea name="resultsValue" readonly="readonly">
    </textarea>
    <pre></pre>
  </div>`;
  exampleUl[dataTypeUl].appendChild(newLi);
  setHeight(id);
}

/*
    butFn 运行与重置按钮点击事件
    三个参数 
    1. index // 索引
    2. id  // id
    3. dataTypeUl  // 数据类型Ul
*/
function butFn(index, id, dataTypeNUm) {
  // 按钮组
  const buttons = exampleUl[dataTypeNUm].getElementsByClassName('buttons')[index].getElementsByTagName('button');
  // 当前li
  const currentLi = exampleUl[dataTypeNUm].getElementsByTagName('li')[index];
  // 返回值 <code>
  const currentResult = currentLi.getElementsByClassName('result')[0].getElementsByTagName('textarea')[0];
  // 操作后的初始值 <code>
  const currentValue = currentLi.getElementsByClassName('changevalue')[0].getElementsByTagName('textarea')[0];

  // 运行按钮
  buttons[0].onclick = () => {
    try {
      const { initialValue, handlingMethod, title } = operationMetho[dataTypeNUm].data[index];
      const resultValue = eval(initialValue);
      const result = eval(handlingMethod);
      currentResult.value = result;
      currentValue.innerText = `${resultValue}`;
      // console.log(`第${index + 1}个-->${title} :`, result);
    }
    catch (e) {
      alert('运行 ❌ ！！！' + e);
    }
  }

  // 重置按钮
  buttons[1].onclick = () => {
    try {
      const { initialValue, handlingMethod } = operationMetho[dataTypeNUm].initData[index];
      setValue(id, `initialValue`, initialValue, dataTypeNUm);
      setValue(id, `handlingMethod`, handlingMethod, dataTypeNUm);
    }
    catch (e) {
      alert('重置 ❌ ！！！' + e);
    }
  }
}

/*
  添加多个事件
*/
exampleUl.forEach((item) => {
  // 点击展开与收起操作
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

  item.addEventListener('dblclick', function (e) {
    if (e.target.nodeName.toLowerCase() === 'textarea' && e.target.name !== 'results' && e.target.name !== 'resultsValue') {
      e.target.readOnly = null;
    }
  })

  item.addEventListener('input', function (e) {
    if (e.target.nodeName.toLowerCase() === 'textarea') {
      let nam = 0;
      operationMetho.filter(
        (item, index) => {
          if (item.type === e.target?.parentNode.parentNode.parentNode?.id.toLowerCase()) {
            return nam = index;
          }
        }
      )
      setValue(e.target.parentNode.id, e.target.name, e.target.value, nam);
    }
  })
});

// 让textarea高度随着内容高度而自适应
function setHeight(arrayId) {
  const arrayIdLabel = document.getElementById(arrayId);
  const textareas = arrayIdLabel.querySelectorAll('textarea');
  const pres = arrayIdLabel.getElementsByTagName('pre');
  textareas.forEach(
    (item, index) => {
      pres[index].innerHTML = item.value;
      item.style.height = `${pres[index].clientHeight - 24}px`;
    });
}

// 更改 textarea 的值
function setValue(id, key, value, dataTypeUl) {
  let data = [];
  data = operationMetho[dataTypeUl].data;
  let num = 0;
  for (let index = 0; index < data.length; index++) {
    if (data[index].id === id) {
      num = index;
    }
  }
  const newid = document.getElementById(id);
  const textareas = newid.querySelectorAll('textarea');
  try {
    for (let index = 0; index < textareas.length; index++) {
      if (textareas[index].name === key) {
        textareas[index].value = value;
      }
    }
    data[num][key] = value; // 更改 operationMetho[num].data，数据 
    setHeight(id);
  }
  catch (e) {
    alert('编辑 ❌ ！！！' + e);
  }
}

// 封装了渲染的方法
function typeMethod(...parameter) {
  try {
    let { id, title, initialValue, handlingMethod } = parameter[0];
    let liArr = exampleUl[parameter[1]].getElementsByTagName('li');
    let index = liArr.length;
    addLi(id, title, initialValue, handlingMethod, parameter[1]);
    butFn(index, id, parameter[1]);
  }
  catch (e) {
    alert('渲染 ❌ ！！！' + e);
  }
}

/* 
  渲染所有内容到页面上
*/
function play() {
  console.time(name);
  operationMetho.forEach(
    (item, index) => {
      item.data = JSON.parse(JSON.stringify(item.initData)); // 深赋值，为了重置数据
      let listsHtmlData = ``; // 设置小标题组 Html 代码为空
      item.data.forEach(
        (item1) => {
          typeMethod({ ...item1 }, index);
          listsHtmlData += `<li><a href="#${item1.id}">${item1.title}</a></li>`;
        }
      )
      lists[index].innerHTML = listsHtmlData;
    }
  )
  console.timeEnd(name);
}