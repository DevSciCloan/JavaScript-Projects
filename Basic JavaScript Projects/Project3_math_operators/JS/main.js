

function mathOperatorAddition() {
    var three = 3;
    var four = 4;
    document.getElementById("Math").innerHTML = three + four;
}

function mathOperatorSubtraction() {
    var three = 3;
    var four = 4;
    document.getElementById("Math").innerHTML = three - four;
}

function mathOperatorMultiplication() {
    var three = 3;
    var four = 4;
    document.getElementById("Math").innerHTML = three * four;
}

function mathOperators() {
    var three = 3;
    var four = 4;
    document.getElementById("Math").innerHTML = "Addition: " + (three + four) + " Subtraction: " + (three - 4) + " Multiplication: " + (three * four);
}

function mathOperatorModulus() {
    var three = 3;
    var four = 4;
    document.getElementById("Math").innerHTML = three % four;
}

function mathOperatorNegation() {
    var three = 3;
    var four = 4;
    document.getElementById("Math").innerHTML = "negation operator on three: " + -three + " and four: " + -four;
}

function mathOperatorIncDecr() {
    var fourInc = 4;
    fourInc++;
    var fourDecr = 4;
    fourDecr--;
    document.getElementById("Math").innerHTML = "decrement four: " + fourDecr + " increment four: " + fourInc;
}

function random() {
    var random = (Math.random() * 100);
    document.getElementById("Math").innerHTML = random;
}

function mathPI() {
    document.getElementById("Math").innerHTML = Math.PI;
}
