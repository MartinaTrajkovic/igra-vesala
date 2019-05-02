const chooseThemeButton = document.querySelector("#chooseTheme");
const themeBoxes = document.querySelectorAll(".themeBox");

setBg("pink","bgPink");
setBg("blue","bgBlue");
setBg("orange","bgOrange");
setBg("rose","bgRose");

themeBoxes.forEach(box => box.addEventListener("click", chooseTheme));
//this function changes CSS based on choosen theme
function chooseTheme(){
    let themeId = this.id;
    document.querySelector("#themeLink").href = `css/${themeId}.css`;
    localStorage.setItem("theme", `css/${themeId}.css`);
}

chooseThemeButton.addEventListener("click", function(){
    changeDisplay("themes","none");
    changeDisplay("categories", "grid");
});

if(localStorage.getItem("theme")){
    document.querySelector("#themeLink").href = localStorage.getItem("theme");
}
else{
  document.querySelector("#themeLink").href = `css/blue.css`;
}

function setBg(id,bg){
    document.querySelector(`#${id}`).style.backgroundImage = `url(media/img/${bg}.svg)`;
}
