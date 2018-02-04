$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function t() {
window.sr = ScrollReveal({ reset: true });
sr.reveal('.scrollReveal', { duration: 600});
}

window.onload = t;