var globalVar = "global var";

function local() {
  var localVar = "local var";
  document.getElementById("variables").innerHTML =
    localVar + " and a " + globalVar;
}

function intentionalError() {
  try {
    document.getElementById("variables").innerHTML =
      localVar + " and a " + globalVar;
  } catch (e) {
    document.getElementById("variables").innerHTML =
      "Refer to the console log to review intentional error.";
    console.log(e);
  }
}

function timeOfDay() {
  var today = new Date();
  var hour = today.getHours();
  var itIs;
  if (hour > 6 && hour < 12) {
    itIs = "Morning";
  } else if (hour == 12) {
    itIs = "Noon";
  } else if (hour < 16) {
    itIs = "Afternoon";
  } else if (hour < 20) {
    itIs = "Evening";
  } else if (hour < 24) {
    itIs = "Night";
  } else {
    itIs = "Early morning";
  }

  document.getElementById("greeting").innerHTML = "Hello, it is " + itIs;
}


function measure() {
  var input = document.getElementById("input").value;
  if (input.length > 10) {
    document.getElementById("result").innerHTML = "Too many characters!";
  } else if (input.length < 1) {
    document.getElementById("result").innerHTML = "Not enough characters";
  } else {
    document.getElementById("result").innerHTML = "Within character limit";
    return true;
  }
  return false;
}

function validate() {
    var valid = measure();
    var input = document.getElementById("input");
    if (valid == true) {
        input.style.backgroundColor = "lawngreen";
    } else {
        input.style.backgroundColor = "lightcoral";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon."
    } else {
        Reply = "It is eventing time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
