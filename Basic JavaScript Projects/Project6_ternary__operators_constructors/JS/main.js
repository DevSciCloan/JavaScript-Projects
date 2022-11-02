function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Can_Ride_Function(Rider) {
    var Height, Can_ride;
    Height = Rider.Rider_Height;
    Can_ride = (Height < 52) ? "is too short": "is tall enough";
    return Can_ride;
}

function Rider(Name, Age, Height) {
    this.Rider_Name = Name;
    this.Rider_Age = Age;
    this.Rider_Height = Height;
}

var Jack = new Rider("Jack", 20, 52);
var Emily = new Rider("Emily", 31, 48);
var Erik = new Rider("Erik", 71, 82);

function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    Erik.Rider_Name + " is " + Erik.Rider_Age +
    " years old and " + Can_Ride_Function(Erik) + " to ride.";
}

function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = addStuff();
    function addStuff() {
        var stuff = "stuff";
        function moreStuff () {stuff += " stuff";}
        moreStuff();
        return stuff;
    }
}