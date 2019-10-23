var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var playerOne = document.getElementsByTagName('img')[0].setAttribute('src', 'images/dice'+randomNumber1+'.png');
var playerTwo = document.getElementsByTagName('img')[1].setAttribute('src', 'images/dice'+randomNumber2+'.png');

function diceGame() {
    if( randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML = "Player 1 Wins!"
    } else if( randomNumber1 < randomNumber2){
        document.querySelector('h1').innerHTML = "Player 2 Wins!"
    } else {
        document.querySelector('h1').innerHTML = "Draw!"
    }
}

diceGame();