document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', showNextSlide);
    document.querySelector('.prev').addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 5000); 
});
  document.addEventListener('DOMContentLoaded', function() {
            const fadeInSection = document.querySelector('.fade-in');

            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function checkFadeIn() {
                if (isElementInViewport(fadeInSection)) {
                    fadeInSection.classList.add('visible');
                    window.removeEventListener('scroll', checkFadeIn);
                }
            }

            window.addEventListener('scroll', checkFadeIn);
            checkFadeIn();
        });
        document.addEventListener('DOMContentLoaded', function() {
            const aboutContent = document.querySelector('.about-content');

            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function checkFadeIn() {
                if (isElementInViewport(aboutContent)) {
                    aboutContent.classList.add('visible'); 
                    window.removeEventListener('scroll', checkFadeIn);
                }
            }

            window.addEventListener('scroll', checkFadeIn);
            checkFadeIn(); 
        });
