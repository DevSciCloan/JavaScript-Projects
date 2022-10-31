var Game = {
    Genre: "First Person Shooter",
    Compatability: "PC, Xbox, Playstation, Mobile",
    ESRB: "Teen",
    Title: "Call of Duty"
};

function my_Dictionary() {
    
    document.getElementById("Dictionary").innerHTML = Game.Title;
    
}

function deleteTitle() {
    delete Game.Title;
    document.getElementById("Dictionary").innerHTML = "Click me again!";
}