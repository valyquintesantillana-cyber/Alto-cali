<script>
    (function() {
      'use strict';

      // ---- Navbar scroll effect ----
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY > 80) {
          navbar.style.padding = '10px 0';
          navbar.style.background = 'rgba(26, 42, 58, 0.97)';
        } else {
          navbar.style.padding = '16px 0';
          navbar.style.background = 'rgba(26, 42, 58, 0.95)';
        }
      });

      // ---- Scroll reveal para tarjetas ----
      const cards = document.querySelectorAll('.room-card, .experiencia-card');
      const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });

      cards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        revealObserver.observe(card);
      });

      // ---- Botón "Ver detalles" ----
      document.querySelectorAll('.btn-ver-detalles').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var roomName = this.closest('.room-card').querySelector('h3').innerText;
          this.style.transform = 'scale(0.94)';
          setTimeout(function() {
            btn.style.transform = '';
            alert('✨ ' + roomName + ' · Alto Cali\n\nMás información y disponibilidad en nuestra recepción.');
          }, 200);
        });
      });

      // ---- Botón reserva ----
      var btnReserva = document.querySelectorAll('.btn-reserva');
      btnReserva.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          btn.style.transform = 'scale(0.94)';
          setTimeout(function() {
            btn.style.transform = '';
            alert('🌟 ¡Gracias! Pronto podrás reservar en Alto Cali Hotel Boutique.');
          }, 200);
        });
      });

      // ---- Smooth scroll ----
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          var targetId = this.getAttribute('href');
          if (targetId === '#') return;
          var target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            var offset = 80;
            var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
        });
      });

      // ---- Parallax sutil en hero ----
      var hero = document.querySelector('.hero');
      if (hero) {
        hero.addEventListener('mousemove', function(e) {
          var x = (e.clientX / window.innerWidth - 0.5) * 8;
          var y = (e.clientY / window.innerHeight - 0.5) * 8;
          hero.style.backgroundPosition = (50 + x) + '% ' + (50 + y) + '%';
        });
      }

      console.log('✨ Alto Cali · Hotel Boutique ✨');
    })();
  </script>