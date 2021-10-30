const opeInput = document.getElementsByTagName("input")[0];

const opeButton = document.getElementsByTagName("button")[0];

const list = document.getElementsByClassName("list")[0];


let addCon;

// 使用 localStorage 进行本地缓存

let Arrlist = JSON.parse(localStorage.getItem('items')) || [];
// 使用 sessionStorage 进行本地缓存
// let Arrlist = [];
// if (sessionStorage.Arrlist) {
//   Arrlist = JSON.parse(sessionStorage.Arrlist);
// }

for (let index = 0; index < Arrlist.length; index++) {
  addList(Arrlist[index].inputValue);
  delent(index);
  setInput(index);
}

// 点击 ➕ 号
opeButton.onclick = () => {
  if (opeInput.value === null || opeInput.value === "") {
    alert("不能为空");
    return;
  }
  addCon = { inputValue: opeInput.value, }
  setArrlist(0, addCon);
  addList(opeInput.value);
  opeInput.value = null;
  setInput(Arrlist.length - 1);
  delent(Arrlist.length -1);
}

// 添加功能
function addList(value) {
  let newLi = document.createElement("li");
  let newInput = document.createElement("input");
  newInput.readOnly = "true";
  newInput.value = value;
  newInput.style.background = "rgb(227 239 246)";
  let newButton = document.createElement("button");
  newButton.innerText = "-"
  newLi.appendChild(newInput);
  newLi.appendChild(newButton);
  list.appendChild(newLi);
}

// 删除功能
function delent(index) {
  return list.getElementsByTagName("button")[index].onclick = function () {
    if(!confirm(`您确定 删除 吗？`)){
      return;
    }
    list.removeChild(this.parentNode);
    setArrlist(1, index)
  }
}

// 修改功能
function setInput(index) {

  const input = list.getElementsByTagName("input")[index];
  // 双击 可以修改文件
  input.ondblclick = function () {
    this.readOnly = null;
    this.style.background = null
  }

  // 失去焦点，自动保存
  input.onblur = function () {
    addCon = { inputValue: this.value, }
    setArrlist(2, index, addCon)
    this.readOnly = "true";
    this.style.background ="rgb(227 239 246)";
  }
}

// 调用数组更改Arrlist数组
function setArrlist(type, index, value) {
  if (type === 0) {  // 添加
    Arrlist = [...Arrlist, index];
  } else if (type === 1) {  // 删除
    Arrlist.splice(index, 1);
  } else if (type === 2) { // 修改
    Arrlist[index] = value;
  }

  // localStorage 缓存
  localStorage.setItem('items', JSON.stringify(Arrlist));
  // sessionStorage 缓存
  sessionStorage.Arrlist = JSON.stringify(Arrlist);
}