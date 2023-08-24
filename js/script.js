let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(links => {
    links.addEventListener('click', function (event) {
        //event.preventDefault();

        navLinks.forEach(links => {
            links.classList.remove('active');
        });
        links.classList.add('active');
    });

    links.addEventListener('focus', function (event) {
        //event.preventDefault();

        navLinks.forEach(links => {
            links.classList.remove('active');
        });
        links.classList.add('active');
    });
});