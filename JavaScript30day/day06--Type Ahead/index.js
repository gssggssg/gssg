const list = document.getElementById("list")
const listUl = list.getElementsByTagName("ul")[0]

// 输入框
const input = document.getElementById("input")

let data;
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(response => response.json())
  .then((json) => { data = json })
  .catch(err => console.log('错误', err));
input.oninput = (e) => {
  listUl.innerHTML = null;
  data?.map(
    (item) => {
      let getRegex;
      let matchData;
      if (e?.target.value) {
        getRegex = new RegExp(`${e?.target.value}`, 'gi');
      } else {
        getRegex = /[*]/
      }
      if (getRegex.test(item.city) || getRegex.test(item.state)) {
        let newItem = document.createElement("li");
        let htmlcon = item.city.replace(getRegex, `|`).split(`｜`) + '-' + item.state.replace(getRegex, `|`).split(`｜`) + ` <span class="dropDown"></span>`;
        let newItemCon = document.createElement("div");
        matchData = item.city.match(getRegex) ?
          item.state.match(getRegex) ?
            item.city.match(getRegex)?.concat(item.state.match(getRegex))
            : item.city.match(getRegex) :
          item.state.match(getRegex);
        // if(item.city.match(getRegex) && item.state.match(getRegex)){
        //   matchData = item.city.match(getRegex)?.concat(item.state.match(getRegex));
        // }else if(item.city.match(getRegex)){
        //   matchData = item.city.match(getRegex)
        // }else if(item.state.match(getRegex)){
        //   matchData = item.state.match(getRegex)
        // }
        for (let aaa = 0; aaa < matchData?.length; aaa++) {
          htmlcon = htmlcon.replace('|', `<span style="color:#26ff00">${matchData[aaa]}</span>`);
        }
        newItem.innerHTML = htmlcon;
        newItem.insertBefore(newItemCon, newItem.childNodes[-1]);
        newItemCon.className = "dropDownCon";
        listUl.insertBefore(newItem, listUl.childNodes[-1]);
        const dropDown = newItem.getElementsByClassName("dropDown")[0]
        let dropDownCon = newItem.getElementsByClassName("dropDownCon")[0]
        dropDown.onclick = () => {
          if (dropDownCon?.style.height) {
            dropDownCon.style.height = null;
            dropDown.style.transform = `rotate(0deg)`
          } else {
            dropDownCon.style.height = '300px';
            dropDown.style.transform = `rotate(180deg)`
            newItemCon.innerHTML = `
              <ul>
                <li>城市 : ${item.city}</li>
                <li>从2000年到2013年的增长 : ${item.growth_from_2000_to_2013}</li>
                <li>纬度 : ${item.latitude}</li>
                <li>经度 : ${item.longitude}</li>
                <li>人口 : ${parseFloat(item.population).toLocaleString()}</li>
                <li>排名 : ${item.rank}</li>
                <li>州 : ${item.state}</li>
              </ul>
            `
          }
        }
      }
    }
  )
}