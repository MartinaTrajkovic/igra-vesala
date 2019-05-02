Abstract
My project was implementation of Hangman game using HTML5 technology with the help of Javascript and CSS. No external libraries are used.

Choosing them
When you open the game you can choose theme for your game. There are four of them. By clicking on any of them chooseTheme() function triggers.This function loads CSS file, based on clicked theme and choosen theme is saved in local storage. After that user needs to click on the button underneath themes container. That click triggers function which changes display of current window to none, and shows category window.

Choosing category	
After choosing theme, category window appears. This window has six different categories that user can choose from. By clicking on any of the category boxes openGameWindow()  function triggers.This function checks which category is clicked, and calls loadGame()  function. This function fetch data according to the selcted category. API returns array of strings from selected category and this function is called to choose random element from array, and that represents hidden word. Selected word is kept in global variable. Current display template hides, and new display with game appears. 

Start of the game
String from previously chosen category is displayed on the screen with dashes instead of letters. Virtual keyboard is shown on the screen, and user can click on a button representing a letter (or press appropriate button on keyboard:this is done in function keyboardInput()). If the hidden word contains a clicked letter, dash will reveal that letter. If not, one part of hangman body will be drawn on canvas:this is done in function hangmanDraw(). Part of the body that needs to be drawn depends on the number of player's mistakes. Number of mistakes are kept in global variable.

End of the game
Game ends in two cases: either will user guess hidden word, or he will run out of tries. When game is over, on the bottom of the screen button appears. By clicking on that button new display with categories appears and user can start game again.
