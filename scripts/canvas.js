function hangerDraw() {
    const hangmanWrapper = document.querySelector("#hangmanDrawing");
    const canvasField = document.createElement("canvas");
    canvasField.id = "hangmanCanvas";
    canvasField.setAttribute("width","170px");
    canvasField.setAttribute("height","200px");
    hangmanWrapper.appendChild(canvasField);
    
    const hanger = canvasField.getContext("2d");
    hanger.moveTo(10, 200);
    hanger.lineTo(10, 0);
    hanger.lineTo(100, 0);
    hanger.lineTo(100, 20);
    hanger.lineWidth = 5;
    let pathToTheme = document.querySelector("#themeLink").href.split("/");
    switch ((pathToTheme[pathToTheme.length - 1]).split(".")[0]) {
        case "pink":
            hanger.strokeStyle = "#a07593";
            break;
        case "blue":
            hanger.strokeStyle = "#003264";
            break;
        case "orange":
            hanger.strokeStyle = "#666";
            break;
            case "rose":
            hanger.strokeStyle = "#7c5959";
    }
    hanger.stroke();

}
//this function draws hangman based od how many mistakes are made
function hangmanDraw(mistakes, wordArray) {
    const canvas = document.querySelector("#hangmanCanvas");
    switch (mistakes) {
        case 1:
            let head = canvas.getContext("2d");
            head.beginPath();
            head.arc(100, 40, 20, 0, 2 * Math.PI);
            head.moveTo(110, 40);
            head.arc(100, 40, 10, 0, Math.PI);
            head.moveTo(95, 30);
            head.arc(93, 30, 2, 0, 2 * Math.PI, true);
            head.moveTo(110, 30);
            head.arc(108, 30, 2, 0, 2 * Math.PI, true);
            head.lineWidth = 3;
            head.stroke();
            break;
        case 2:
            let body = canvas.getContext("2d");
            body.moveTo(100, 60);
            body.lineTo(100, 120);
            body.stroke();
            break;
        case 3:
            let leftHand = canvas.getContext("2d");
            leftHand.moveTo(100, 65);
            leftHand.lineTo(70, 85);
            leftHand.stroke();
            break;
        case 4:
            let rightHand = canvas.getContext("2d");
            rightHand.moveTo(100, 65);
            rightHand.lineTo(130, 85);
            rightHand.stroke();
            break;
        case 5:
            let leftLeg = canvas.getContext("2d");
            leftLeg.moveTo(100, 120);
            leftLeg.lineTo(70, 150);
            leftLeg.stroke();
            break;
        case 6:
            let rightLeg = canvas.getContext("2d");
            rightLeg.moveTo(100, 120);
            rightLeg.lineTo(130, 150);
            rightLeg.stroke();
            break;
        case 7:
            let leftFoot = canvas.getContext("2d");
            leftFoot.moveTo(70, 150);
            leftFoot.lineTo(60, 140);
            leftFoot.stroke();
            break;
        case 8:
            let rightFoot = canvas.getContext("2d");
            rightFoot.moveTo(130, 150);
            rightFoot.lineTo(140, 140);
            rightFoot.stroke();
            playAudio("media/audio/loser.mp3");
            endOfGame(wordArray);
    }
}
