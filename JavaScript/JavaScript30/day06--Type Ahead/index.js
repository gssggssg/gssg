const list = document.getElementById("list")
const listUl = list.getElementsByTagName("ul")[0]

// 输入框
const input = document.getElementById("input")

let data;
let datas;
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(response => response.json())
  .then((json) => { data = json })
  .catch(err => console.log('错误', err));
input.oninput = (e) => {
  listUl.innerHTML = null;
  data?.map(
    (item) => {
      let getRegex
      if (e?.target.value) {
        getRegex = new RegExp(`${e?.target.value}`, 'gi');
      } else {
        getRegex = /[*]/
      }
      if (getRegex.test(item.city)) {
        let newItem = document.createElement("li");
        let replaceData = item.city.replace(getRegex, `|`).split(`｜`);
        let matchData = item.city.match(getRegex);
        let htmlcon = `${replaceData[0]}`;
        for (let aaa = 0; aaa < matchData.length; aaa++) {
          htmlcon = htmlcon.replace('|', `<span style="color:#26ff00">${matchData[aaa]}</span>`);
        }
        newItem.innerHTML = htmlcon;
        textnode = document.createTextNode(`${item.city}`);
        listUl.insertBefore(newItem, listUl.childNodes[-1]);
      }
    }
  )
}