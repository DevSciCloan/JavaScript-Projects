var ins = document.getElementById("Instruction");
var res = document.getElementById("Result");
var inputBox = document.getElementById("Input");
var rand = Math.floor(Math.random() * 100);
inputBox.style.backgroundColor = "lightgray";
console.log(rand); // For testing purposes. Gives correct answer in console.


// Initializing an image element to be drawn when a button is clicked.
var img = document.createElement("img");
img.className = "Tech-Academy-Text";
img.src = "./img/TechAcademyText.png";

// Just to make sure the page doesn't refresh when submitting forms with any button element with id "btn"
// document.getElementById("btn").addEventListener("click", function (event) {
//   event.preventDefault();
// });


// Nice little addition to the user experience. Allows the user to quickly input guesses by submitting them with the enter key.
document.onkeydown = function () {
  if (window.event.keyCode == 13 && document.querySelector("#Input") === document.activeElement) {
    play();
  }
};

// Submit user input and compare to the random number between 1 and 100 generated on page load.
function play() {
  let input = document.getElementById("Input").value;
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
  inputBox.focus(); // This line and the next allows the user to submit guesses much faster by pre-selecting the previous answer.
  inputBox.select();
}

var paragraphs = document.getElementsByClassName("info");
paragraphs[0].style.borderBottom = "1px solid black";
paragraphs[1].style.borderBottom = "1px dashed black";

function draw() {
  let canvas = document.getElementById("techAcademyText");
  let context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
}

// Adding gradient background to canvas
var canvas1 = document.getElementById("canvas1");
var context = canvas1.getContext("2d");
var gradient = context.createRadialGradient(75,50,5,90,60,100);
gradient.addColorStop(0,"blue");
gradient.addColorStop(.5,"green");
gradient.addColorStop(1,"red");
context.fillStyle = gradient;
context.fillRect(0,0,172,36);
