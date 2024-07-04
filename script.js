document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        var galleryLink = document.getElementById('gallery-link');
        var additionalLinks = document.getElementById('additional-links').querySelector('ul');

        galleryLink.addEventListener('click', function(event) {
            event.preventDefault();
            additionalLinks.style.display = (additionalLinks.style.display === 'none') ? 'block' : 'none';
        });
    });

