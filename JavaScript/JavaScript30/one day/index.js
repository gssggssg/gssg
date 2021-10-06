const listButton = document.getElementById("listButton")
const listLi = listButton.getElementsByTagName("li")

// console.log( listLi )

listLi.map((listLis)=>{
  listLis.onclick = (time) => {
    console.log(``, time)
  }
})

listButton.onclick= () => {
  console.log("")
}
