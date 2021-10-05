const listButton = document.getElementById("listButton")
const listLi = listButton.getElementsByTagName("li")

console.log( listLi )

listLi.map((listLis)=>{
  listLis.onclick = (nnnn) => {
    console.log(``, )
  }
})

listButton.onclick= () => {
  console.log("")
}
