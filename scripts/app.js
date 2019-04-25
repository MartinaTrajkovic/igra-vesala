
const apiList = [
    { name: "catoon", category: "ЦРТАНИ ФИЛМОВИ", api: "https://api.jsonbin.io/b/5cbf634e8967d5677997b6e6" },
    { name: "fairyTales", category: "БАЈКЕ", api: "https://api.jsonbin.io/b/5cbf661b1f6d9a5478d01045" },
    { name: "songs", category: "ПЕСМЕ ЗА ДЕЦУ", api: "https://api.jsonbin.io/b/5cbf6accf1172a287e1e3ef8" },
    { name: "superheroes", category: "СУПЕРХЕРОЈИ", api: "https://api.jsonbin.io/b/5cbf6e0c8967d5677997ba35" },
    { name: "animals", category: "ЖИВОТИЊЕ", api: "https://api.jsonbin.io/b/5cbf6f731f6d9a5478d0130c" },
    { name: "countries", category: "ДРЖАВЕ", api: "https://api.jsonbin.io/b/5c97bfd7c13b773c081d406c" }
];

apiList.forEach(apiItem => {
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category","buttons", "flex-center");
    categoryContainer.id = `${apiItem.name}`;
    categoryContainer.innerText = `${apiItem.category}`;
    document.querySelector("#categories").appendChild(categoryContainer);
});

const categories = document.querySelectorAll(".category");
categories.forEach(category => category.addEventListener("click", openGameWindow));
categories.forEach(category => category.addEventListener("mouseenter", getRandomColor));
categories.forEach(category => category.addEventListener("mouseleave", resetColor));

function openGameWindow() {
    categories.forEach(category => category.removeEventListener("click", openGameWindow));
    const category = this.id;
    for (let i = 0; i < apiList.length; i++) {
        if (category == apiList[i].name) {
            appendCategoryName(apiList[i].category);
            loadGame(apiList[i].api);
        }
    }
}
