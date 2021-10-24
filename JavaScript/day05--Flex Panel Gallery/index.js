let flexLists = document.getElementsByClassName("flexList")

let flexTop = document.getElementsByClassName("flexTop")
let flexBot = document.getElementsByClassName("flexBot")

flexLists = Object.values(flexLists)

flexTop = Object.values(flexTop)
flexBot = Object.values(flexBot)

flexLists.map(
  (item, index) => {
    item.onclick = (items) => {
      if(flexLists[index].style.flex === "5 1 0%"){
        flexLists[index].style.flex = 1 
        flexTop[index].style.top = "-30%";
        flexBot[index].style.bottom = "-30%";
      }else{
        flexLists[index].style.flex = 5;
        flexTop[index].style.top = 0;
        flexBot[index].style.bottom = 0;
      }
    }
  }
)
