
    // ===== NAVBAR TOGGLE =====
    function toggleMenu() {
      const menu = document.getElementById('menu');
      const hamburger = document.getElementById('hamburger');
      const isOpen = menu.classList.toggle('active');
      hamburger.classList.toggle('toggle-anim');
      hamburger.setAttribute('aria-expanded', isOpen);
    }

    // Close menu on link click (mobile)
    document.querySelectorAll('.menu-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('active');
        document.getElementById('hamburger').classList.remove('toggle-anim');
      });
    });