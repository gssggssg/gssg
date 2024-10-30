const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const button = document.getElementsByTagName("button")[0];

function clickOnThe() {
  console.log(this.id + "被点击了");
}

box1.addEventListener("click", clickOnThe,{once: true});
box2.addEventListener("click", clickOnThe,{once: true});
box3.addEventListener("click", clickOnThe,{once: true});

button.addEventListener("click", function () {console.log("button被点击了")}, {once: true});