const lunch = {
    chips: "lays",
    drink: "coke",
    sandwich: "turkey"
};

const lunch2 = {
    chips: "pringles",
    drink: "sprite",
    sandwich: "BLT"
}

function Call_Loop() {
let list = ["Cat", "Rabbit", "Dog", "Bear", "Lion", "Toad", "Bird", "Cheetah", "Jaguar"];
    for (i=0; i < list.length;) {
        document.getElementById("Loop").innerHTML += list[i] + "<br>";
        i++;
    }
}

function array_Function() {
    let list = ["Cat", "Rabbit", "Dog", "Bear", "Lion", "Toad", "Bird", "Cheetah", "Jaguar"];
    for (i=0; i < list.length;) {
        document.getElementById("Array").innerHTML += list[i] + "<br>";
        i++;
    }
}

function constant_Function() {
    var para = document.getElementById("Constant");
    let lunchItems = Object.keys(lunch2);
    let lunchItemsList = "";
    lunchItems.forEach((item) => {
        lunchItemsList += lunch2[item] + "<br>";
    })
    para.innerHTML += "Chips value is: " + lunch.chips + "<br>";
    para.innerHTML += " But if we try to assign new values to each property of the const object lunch with the following values we get an error (refer to console for more info).<br>";
    para.innerHTML += lunchItemsList + "<br>";
    try {
        lunch = {
            chips: "pringles",
            drink: "sprite",
            sandwich: "BLT"
        };
    } catch(e) {
        console.log(e);
    }
    para.innerHTML += " After attempt to reassign the lunch object with new values chips still contains the vlaue: " + lunch.chips + "<br>";
    para.innerHTML += " Next we add a new property to constant lunch object " + "<br>";

    lunch.dessert = "pudding";

    para.innerHTML += " The new property in constant object lunch called dessert with a value of \"pudding\" returns the value: " + lunch.dessert;
    
}

function letObject() {
    let myObject = {
        1: "item 1",
        2: "item 2",
        3: "item 3",
        print: function() {
            return "We have three key value pairs in this object which are: <br>" + this[1] + "<br>" + this[2] + "<br>" + this[3] + "<br>";
        }
    };
    document.getElementById("Let").innerHTML = myObject.print();
}

function loopAndBreak() {
    var count = 0;
    var para = document.getElementById("loopandstuff");
    while (count < 10) {
        count++;
        para.innerHTML += "the count is: " + count + "<br>";
        if (count == 3) {
            break;
        };
        console.log(count);
        
    }
    para.innerHTML += "<br> Done.<br><br>";
    count = 0;
    while (count < 10) {
        
        console.log(count);
        count++;
        if (count == 3) {
            para.innerHTML += " You have reached 3!<br>";
            continue;
        };
        para.innerHTML += "the count is: " + count + "<br>";
    }
    
    para.innerHTML += "<br> Done.";
}

