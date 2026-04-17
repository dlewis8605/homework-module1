/* Hamburger nav toggle — shared across all pages */
(function () {
    var btn  = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');

    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
    });

    /* Close menu when a nav link is clicked */
    menu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    /* Close menu when clicking outside the nav */
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
})();
