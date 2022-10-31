
var p = document.getElementById("paragraph1");
var s1 = "Button has not been clicked yet!";
p.innerHTML = s1;

function myFunction() {
    
    var s2 = "Button has been clicked!";
    
    var button1 = document.getElementById("btn1");
    
    button1.style.backgroundColor = "green";
    p.innerHTML = s2;
    button1.textContent += "- done"
}