/**
 * day02-时钟实间
 */

// 时针
const hourHand = document.getElementById("hourHand");

// 分针
const minuteHand = document.getElementById("minuteHand");

// 秒针
const secondHand = document.getElementById("secondHand");

let data;

turn(new Date())
/*
  hourHandNum  24时
  minuteHandNum 60分
  secondHandNum 60秒
*/

//没毫秒执行一次，刷新当前时间
setInterval(function() {
  data = new Date()
  turn(data)
}, 500);

//让时钟转起来的函数

function turn(data) {
  const hourHandNum = data.getHours()
  const minuteHandNum = data.getMinutes()
  const secondHandNum = data.getSeconds()
  hourHand.style.transform = `rotate(${hourHandNum / 24 * 360}deg)`
  minuteHand.style.transform = `rotate(${minuteHandNum / 60 * 360}deg)`
  secondHand.style.transform = `rotate(${secondHandNum / 60 * 360}deg)`
}