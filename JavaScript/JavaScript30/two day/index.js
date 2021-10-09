
// 时针
const hourHand = document.getElementById("hourHand");

// 分针
const minuteHand = document.getElementById("minuteHand");

// 秒针
const secondHand = document.getElementById("secondHand");

let data =  new Date();


/*
  hourHandNum  24时
  minuteHandNum 60分
  secondHandNum 60秒
*/

const hourHandNum = data.getHours()
const minuteHandNum = data.getMinutes()
const secondHandNum = data.getSeconds()

hourHand.style.transform = `rotate(${hourHandNum/24 * 360}deg)`
minuteHand.style.transform = `rotate(${minuteHandNum/60 * 360}deg)`
secondHand.style.transform = `rotate(${secondHandNum/60 * 360}deg)`

