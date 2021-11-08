const timeButs = document.getElementsByClassName('timer__controls')[0];
const buttons = document.querySelectorAll('[data-time]');
const displayTime = document.getElementsByClassName('display__time-left')[0];
const displayEnd = document.getElementsByClassName('display__end-time')[0];
const minutes = document.getElementsByName('minutes')[0];

let inTimer = setInterval(() => { }, 1000);

// 点击开始倒计时
function startTimer() {
	clearInterval(inTimer);
	let timeNum = this.getAttribute("data-time");
	// 开始时间为
	const now = Date.now();
	const then = now + timeNum * 1000; //Date取得為minsec
	const end = new Date(then);
	const hour = end.getHours();
	const adjustedHour = hour > 12 ? hour - 12 : hour;
	const minutes = end.getMinutes();
	displayEnd.innerHTML = `开始时间为${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
	timer(timeNum);
}

// 触发定时器
function timer(timeNum) {
	clearInterval(inTimer);
	inTimer = setInterval(
		() => {
			if (timeNum <= 0) clearInterval(inTimer);
			timeNum--;
			const minutes = Math.floor(timeNum / 60);
			const reminderSeconds = timeNum % 60;
			displayTime.innerHTML = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
		}, 1000
	)
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	// 重置
	this.reset();
})