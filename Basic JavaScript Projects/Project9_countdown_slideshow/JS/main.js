var timer = document.getElementById("timer");
let slideIndex = 1;
showSlides(slideIndex);

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds === -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img-container");
    let slides1 = document.getElementsByClassName("transition");
    if (n > slides.length) {slideIndex =1};
    if (n < 1) {slideIndex = slides.length};
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    
    interval();

}

function interval() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds === -1) {
            plusSlides(1);
            clearTimeout(time);
        }
    }
    tick();
}
