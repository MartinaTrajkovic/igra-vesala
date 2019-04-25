const lettersArray = ["А", "Б", "В", "Г", "Д", "Ђ", "Е", "Ж", "З", "И", "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ћ", "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш",];
const lettersUnicode = [65, 66, 86, 71, 68, 221, 69, 220, 90, 73, 74, 75, 76, 81, 77, 78, 87, 79, 80, 82, 83, 84, 222, 85, 70, 72, 67, 186, 88, 219];

function loadGame(api) {
    fetch(api)
        .catch(function (err) {
            alert("Дошло је до грешке. Покушајте за неколико минута поново.");
        })
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            const randomNumber = Math.floor(Math.random() * data.length);
            const wordToGuess = data[randomNumber].name;
            const lettersOfGuessingWord = wordToGuess.toUpperCase().split("");
            const hiddenWord = wordInDashes(wordToGuess);
            hangerDraw();
            appendDashes(hiddenWord);
            appendButtonsWithLetters(lettersArray);
            changeDisplay("categories", "none");
            changeDisplay("gameContainer", "grid");
            guessing(lettersOfGuessingWord, hiddenWord);
            document.querySelector("body").addEventListener("keyup", keyboardInput);
        })

}
function guessing(wordArray, hiddenWord) {
    let wrongGuesses = 0;
    for (let i = 0; i < lettersArray.length; i++) {
        document.querySelector(`#letter${i}`).addEventListener("click", function () {
            const clickedLetter = this.innerText;
            this.disabled = true;
            this.style.backgroundColor = "rgb(40, 173, 57)";
            this.style.color = "rgb(249, 252, 100)"
            this.style.cursor = "auto"
            const indexesOfLetter = allIndexes(wordArray, clickedLetter);
            if (indexesOfLetter.length === 0) {
                wrongGuesses++;
                hangmanDraw(wrongGuesses, wordArray);
            }
            else {
                indexesOfLetter.forEach(index => {
                    document.querySelector("#game").innerHTML = "";
                    hiddenWord.splice(index, 1, this.innerHTML);
                    appendDashes(hiddenWord);

                })
                if (hiddenWord.join("") == wordArray.join("")) {
                    playAudio("media/audio/bravo.mp3");
                    endOfGame(wordArray);
                }
            }
        })
    }
}
function appendCategoryName(categoryName) {
    document.querySelector("#categoryName").innerHTML = `<p>${categoryName}</p>`;
}

function endOfGame(wordArray) {
    document.querySelector("#game").innerHTML = "";
    appendDashes(wordArray);
    document.querySelector("#alphabet").style.pointerEvents = "none";
    changeDisplay("newGame", "flex");
    document.querySelector("body").removeEventListener("keyup", keyboardInput);

}
function newGame() {
    location.reload();
}
function appendButtonsWithLetters(array) {
    counter = 0;
    array.forEach(item => {
        const letter = document.createElement("button");
        letter.classList.add("buttons");
        letter.addEventListener("mouseenter", getRandomColor);
        letter.addEventListener("mouseleave", resetColor);
        letter.innerText = item;
        letter.id = `letter${counter}`;
        document.querySelector("#alphabet").appendChild(letter);
        counter++
    })
}
function wordInDashes(word) {
    let hiddenWord = [];
    const spaces = allIndexes(word, " ");
    const lettersOfTheWord = word.split("");
    for (let i = 0; i < lettersOfTheWord.length; i++) {
        hiddenWord[i] = "_";
        for (let j = 0; j < lettersOfTheWord.length; j++) {
            hiddenWord[spaces[j]] = " ";
        }
    }
    return hiddenWord;
}
function allIndexes(array, letter) {
    var indexes = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === letter) {
            indexes.push(i);
        }
    }
    return indexes;
}
function appendDashes(word) {
    word.forEach(letter => {
        const pElement = document.createElement("p");
        pElement.innerText = letter;
        document.querySelector("#game").appendChild(pElement);
    })
}
function changeDisplay(id, display) {
    document.querySelector(`#${id}`).style.display = display;
}
function keyboardInput(event) {
    event.preventDefault();
    var x = event.keyCode;
    for (let i = 0; i < lettersArray.length; i++) {
        switch (x) {
            case lettersUnicode[i]:
                document.querySelector(`#letter${i}`).click();
                break;
        }
    }

}

function playAudio(sound) {
    let audio = new Audio(`${sound}`);
    audio.play();
    audio.volume = 0.3;
}
document.querySelector("#newGame").addEventListener("click", newGame);