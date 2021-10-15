const list = document.getElementById("list")
const listUl = list.getElementsByTagName("ul")[0]

// 输入框
const input = document.getElementById("input")

let data;
let datas;
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(response => response.json())
  .then(
    (json) => {
      data = json
    }
  )
  .catch(err => console.log('错误', err));

input.oninput = (e) => {
  // // 1.使用筛选器
  // datas = data.filter(
  //   (item) => {
  //     if (item.city.indexOf(e?.target.value) === -1) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   }
  // )

  // let newItem
  // let textnode
  // listUl.innerHTML = null

  // datas.map(
  //   (item) => {
  //     // 创建一个标签
  //     newItem = document.createElement("li")
  //     // 创建一个文本节点
  //     textnode = document.createTextNode(`${item.city}`)
  //     // 将文本节点添加到标签中
  //     newItem.appendChild(textnode)
  //     // 最后在列表中的首个子节点之前插入此 li 节点。
  //     listUl.insertBefore(newItem, listUl.childNodes[-1]);
  //   }
  // )

  // 2. 使用正则表达式
  let newItem;
  let textnode;
  listUl.innerHTML = null;
  data?.map(
    (item) => {

      // 正则表达式
      const getRegex = new RegExp(`${e?.target.value}`, 'g');

      if (getRegex.test(item.city)) {

        item.city.replace(getRegex, `<p style="color=#555"> </p>`)
        // 创建一个标签
        newItem = document.createElement("li")

        newItem.innerHTML = `${item.city.split(`${e?.target.value}`)[0]}<span style="color:#26ff00">${e?.target.value}</span>${item.city.split(`${e?.target.value}`)[1]}`

        // 创建一个文本节点
        textnode = document.createTextNode(`${item.city}`)

        // 将文本节点添加到标签中
        // newItem.appendChild(textnode)

        // 最后在列表中的首个子节点之前插入此 li 节点。
        listUl.insertBefore(newItem, listUl.childNodes[-1]);
      }

    }
  )
}