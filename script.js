document.getElementById("checkGuess").onclick = function () {
  var randonmNumber = Math.random();

  randonmNumber = randonmNumber * 6;

  randonmNumber = Math.floor(randonmNumber);

  if (document.getElementById("guess").value == randonmNumber) {
    alert(" Well done! You got it!!!");
  } else {
    alert("Nope! The number was" + randonmNumber);
  }
};
