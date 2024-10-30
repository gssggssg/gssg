import "./index.less";
export const snakeBut = document.getElementById("snakeBut");
const GluttonousSnake = document.getElementById("GluttonousSnake");
snakeBut.onclick = () => {
    GluttonousSnake.style.display = "flex";
}