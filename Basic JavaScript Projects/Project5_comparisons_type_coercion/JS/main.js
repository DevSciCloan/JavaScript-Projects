function returnType() {
    var integer = 5;
    document.write(typeof integer);
}

function returnTypeCoercion() {
    var five = document.getElementById("type").innerHTML;
    var numberFive = Number(five);
    document.getElementById("Coercion").innerHTML += typeof numberFive;
}

function isItNaN() {
    var isNan = "five";
    document.getElementById("nanTest").innerHTML += " " + isNaN(isNan);
}

function isItNaNAfterCoercion() {
    var number = 5;
    document.getElementById("nanTest1").innerHTML += " " + isNaN(number) + " because an integer is a number.";
}

function positiveInfinity() {
    document.getElementById("infinity").innerHTML += 3E310;
}

function negInfinity() {
    document.getElementById("negInfinity").innerHTML += -3E310;
}

document.getElementById("boolean1").innerHTML += "10 &#60; 5: " + (10<5);
document.getElementById("boolean2").innerHTML += "10 &#62; 5: " + (10>5);
document.getElementById("equals").innerHTML += ((5+5) == 10) + " statement.";
document.getElementById("equals1").innerHTML += (5 === 5) + " statement.";
document.getElementById("equals2").innerHTML += (5 === 6) + " statement.";
document.getElementById("equals3").innerHTML += (5 === "5") + " statement.";
document.getElementById("equals4").innerHTML += (5 === "6") + " statement.";

document.getElementById("and").innerHTML += (10>5) && (10>3);
document.getElementById("or").innerHTML += (10<5) || (10>5);
document.getElementById("not").innerHTML += !(10<5);

console.log(2+2);
console.log(10<5);
