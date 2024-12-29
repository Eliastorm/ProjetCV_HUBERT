
    function updateLogo() {
        const logoImg = document.querySelector('#logo img');
        if (window.innerWidth < 768) {
            logoImg.src = '../../img/menu.png'; // Image pour petit écran
        } else {
            logoImg.src = '../../img/favicon.png'; // Image pour écran normal
        }
    }

    // Vérification de la taille d'écran au chargement de la page et lors du redimensionnement
    window.addEventListener('resize', updateLogo);
    window.addEventListener('load', updateLogo);

    document.addEventListener("DOMContentLoaded", function() {
        const logo = document.getElementById('logo');
        const navItems = document.querySelector('.navitems');

        logo.addEventListener('click', function() {
            navItems.classList.toggle('active'); // Ajoute ou enlève la classe active
        });
    });

    let isThrottled = false; // Pour éviter les défilements rapides

    window.addEventListener('wheel', function(event) {
        if (!isThrottled) {
            isThrottled = true; // Empêche d'autres événements pendant un certain temps
    
            // Détermine la direction du défilement
            const delta = event.deltaY > 0 ? 1 : -1;
            // Définit la position de défilement
            const targetPosition = window.scrollY + (window.innerHeight * delta);
    
            // Défilement vers la position cible
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Pour un défilement en douceur
            });
    
            // Réinitialise après un court délai
            setTimeout(() => {
                isThrottled = false;
            }, 800); // Ajustez le délai selon vos préférences
        }
    });
    

    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel .slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Carrousel automatique toutes les 5 secondes
    setInterval(nextSlide, 8000);