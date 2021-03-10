document.getElementById("checkGuess").onclick = function () {
  var randomNumber = Math.random();

  randomNumber = randomNumber * 6;

  randomNumber = Math.floor(randomNumber);

  if (document.getElementById("guess").value == randomNumber) {
    alert(" Well done! You got it!!!");
  } else {
    alert("Nope! The number was" + " " + randomNumber);
  }
};
