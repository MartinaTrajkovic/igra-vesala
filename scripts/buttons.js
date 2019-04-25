
function getRandomColor() {
    const colorsArray = ["#00ffff", "#FFBCFF", "#f989f6", "#89f9b0", "#ffbb87","#d18eff"];
    const randomNumber = Math.floor(Math.random()*colorsArray.length);
    this.style.backgroundColor = `${colorsArray[randomNumber]}`;
}
function resetColor(){
    this.style.backgroundColor = "#f9fc64";

}