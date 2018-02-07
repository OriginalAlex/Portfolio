var years, days, hours, mins, secs, age;

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function scrollReveal() {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.scrollReveal', { duration: 600});
    sr.reveal('.projectContainer', { duration: 600});
}

function formatTime(t) { // t is either minutes, hours, or seconds
    if (t < 10) t = "0" + t;
    return t;
}

function displayTime() {
    age.innerHTML = years + "y : " + days +"d : " + (hours) + "h : " + (mins) + "m : " + formatTime(secs) + "s";
}

function updateTime() {
    secs++;
    if (secs == 60) {
        secs = "0";
        mins++;
        mins = formatTime(mins);
        if (mins == 60) {
            mins = "00";
            hours++;
            hours = formatTime(hours);
            if (hours == 24) {
                hours = "00";
                days++;
                if (days == 365) {
                    days = 0;
                    years++;
                }
            }
        }
    }
}

function loop() {
    updateTime();
    displayTime();
    console.log("hi");
    setTimeout(loop, 1000);
}

window.onload = function() {
    scrollReveal();
    age = document.getElementById("age");
    var date = new Date();
    var myAge = date.getTime() - 1018560300000; // changed a lil bit :c
    myAge /= 1000;
    secs = parseInt(myAge % 60);
    myAge /= 60;
    mins = formatTime(parseInt(myAge % 60));
    myAge /= 60;
    hours = formatTime(parseInt(myAge % 24));
    myAge /= 24;
    days = parseInt(myAge % 365);
    myAge /= 365;
    years = parseInt(myAge);
    // myAge now has the value of years!
    loop();
}