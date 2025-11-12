document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const header = document.querySelector('header');

    // 1. SCROLL FLUIDO
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight, // Sottrai l'altezza dell'header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. EVIDENZIAZIONE LINK ATTIVO (Active Link)
    function onScroll() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Controlla se il centro della sezione è visibile
            if (pageYOffset >= sectionTop - (sectionHeight / 2) - header.offsetHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Aggiungi la classe 'active' al link Home all'inizio
    document.querySelector('nav ul li a[href="#home"]').classList.add('active');

    window.addEventListener('scroll', onScroll);
});