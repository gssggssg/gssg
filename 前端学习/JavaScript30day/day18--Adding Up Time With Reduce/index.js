// 在影片清单中，每条项目的 利用JS 将其加总并输出为小时／分钟／秒的格式。HTML如下：data-time

const timeData = document.querySelectorAll('[data-time]');
const title = document.getElementById('title');

// 处理好时间格式
let timeArr = [...timeData];
const uu = timeArr.reduce(
  (sum, current) => {
    let itemData = current.dataset.time;
    let secondNum = itemData.substr(-2);
    sum = +sum + +itemData.substr(0, itemData.indexOf(':')) * 60 + +secondNum;
    return sum;
  }, 0
);

title.innerText = `时间为：0${parseInt(uu / 3600)}时${parseInt(uu / 60) % 60}分${uu % 60}秒`;

console.log(`时间为：0${parseInt(uu / 3600)}时${parseInt(uu / 60) % 60}分${uu % 60}秒`);