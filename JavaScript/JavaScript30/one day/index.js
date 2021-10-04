const listButton = document.getElementById("listButton")
const listLi = listButton.getElementsByTagName("li")

console.log( listLi )

listLi.map((listLis)=>{
  listLis.onclick = (nnnn) => {
    console.log(`nnnn`, nnnn)
  }
})

listButton.onclick= () => {
  console.log("你好呀")
}
