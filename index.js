function checkRefresh() {                          // From line 1-9, line 13 (and 33) and line 35 are extra code that make it so that the "refresh me" message is displayed even after exiting and re-entering the URL
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")

  } else(
    rollTheDice()
  )

}



function rollTheDice() {
var randomNumber1 = Math.floor((Math.random() * 6) + 1); // Makes a random number between 1 and 6

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // Swaps the img1, which is dice6, to something that is located in images/dice with a random number and adds png so that it's Dice(RandomNUmber).png

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!"
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩"
}

else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML= "Draw!"
}
}

document.querySelector("body").onload = checkRefresh();
