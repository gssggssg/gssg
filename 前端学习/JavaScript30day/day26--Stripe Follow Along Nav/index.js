const nav = document.querySelector('.top');
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground'); // 每一列的参数

function mouseEnter() {

  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  // background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  }

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function mouseLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

// 注册鼠标进过事件
triggers.forEach(ele => ele.addEventListener('mouseenter', mouseEnter));

// 注册鼠标移出事件
triggers.forEach(ele => ele.addEventListener('mouseleave', mouseLeave));