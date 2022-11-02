var para = document.getElementById("concat");

function concatenate() {
    
    para.innerHTML = para.innerHTML.concat("This text is concatenated with the original text.");
}

function sliceIt() {
    para.innerHTML = para.innerHTML.slice(20,30);
}

function upperCaseIt() {
    para.innerHTML = para.innerHTML.toUpperCase();
}

function textSearch() {
    para.innerHTML += "found \"it\" at index: " + para.innerHTML.search("it");
}

function returnAsString() {
    var number = 5;
    document.getElementById("btn").innerHTML = number.toString();
}

function precise() {
    var para = document.getElementById("precise");
    var before = para.innerHTML;
    var after = Number(before).toPrecision(10);
    para.innerHTML = after;
}

function fixIt() {
    var para = document.getElementById("precise");
    var before = para.innerHTML;
    var after = Number(before).toFixed(6);
    para.innerHTML = after;
}

function getValue() {
    var para = document.getElementById("precise");
    var before = para.innerHTML;
    var after = Number(before).valueOf();
    para.innerHTML += " and when valueOf is called you get the number as a string: "+after;
}