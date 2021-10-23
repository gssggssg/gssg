const slideIn = document.getElementsByClassName("content")[0].querySelectorAll(".slide-in");

function scroll() {

  slideIn.forEach((item) => {

    let scrollData = document.documentElement.scrollTop;
    if ( item.offsetTop < scrollData + item.height &&  scrollData  < item.offsetTop + item.height ) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', ()=>{setInterval(scroll,200)});