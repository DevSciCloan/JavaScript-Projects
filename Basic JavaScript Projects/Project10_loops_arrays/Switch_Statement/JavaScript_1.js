var ins = document.getElementById("Instruction");
var res = document.getElementById("Result");
var inputBox = document.getElementById("Input");
var rand = Math.floor(Math.random() * 100);
console.log(rand);
inputBox.style.backgroundColor = "lightgray";

document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
});

document.onkeydown = function () {
  if (window.event.keyCode == 13) {
    play();
  }
};

function play() {
  let input = document.getElementById("Input").value;
  console.log(input + " and the rand is: " + rand);
  res.innerHTML = "";
  var guess = +input;
  switch (true) {
    case guess < 1 || guess > 100:
      ins.innerHTML = "Please enter a number between 1 and 100";
      inputBox.style.backgroundColor = "tomato";
      break;
    case guess == rand:
      ins.innerHTML = "";
      res.innerHTML = "You guessed the correct number!";
      inputBox.style.backgroundColor = "mediumseagreen";
      break;
    case guess < rand:
      ins.innerHTML = "Too low!";
      inputBox.style.backgroundColor = "lightgray";
      break;
    case guess > rand:
      ins.innerHTML = "Too High!";
      inputBox.style.backgroundColor = "lightgray";
      break;
    default:
      inputBox.style.backgroundColor = "tomato";
      ins.innerHTML = "You can only enter an Integer between 1 and 100.";
  }
  inputBox.focus();
  inputBox.select();
}
