let seccion = document.querySelector('section');


window.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.contenido', {
        scale: 0,
        origin: 'left',
        distance: '40rem',
        reset: true,
        delay: 300
    })

    window.addEventListener('scroll', () => {
        let valorScroll = window.scrollY,
            valor = 140 + valorScroll;

        seccion.style.clipPath = "circle(" + valorScroll + "px at center)";
    })
});