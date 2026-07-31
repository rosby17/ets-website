/* =============================================================================
   ETS — English and Translation Services
   main.js — Interactions & Animations
   ============================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. Sticky Header ────────────────────────────────────────────────── */
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── 2. Hamburger / Mobile Nav ──────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Fermer le menu mobile au clic sur un lien
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ─── 3. Smooth Scroll sur tous les liens ancres ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─── 4. Intersection Observer — Animations fade-up ──────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  fadeEls.forEach(el => observer.observe(el));

  /* ─── 5. Active Nav Link au scroll ───────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    const scrollY = window.scrollY + header.offsetHeight + 80;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.style.color = (scrollY >= top && scrollY < top + height)
          ? 'var(--brand-blue)'
          : '';
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ─── 6. Compteurs animés (trust stats) ──────────────────────────────── */
  const counters = document.querySelectorAll('.trust-stat .num');
  let counted = false;

  const animateCounter = (el) => {
    const target = el.textContent;
    const isPercent = target.endsWith('%');
    const isPlus = target.endsWith('+');
    const num = parseInt(target);
    if (isNaN(num)) return;
    let current = 0;
    const step = Math.ceil(num / 40);
    const interval = setInterval(() => {
      current = Math.min(current + step, num);
      el.textContent = current + (isPercent ? '%' : isPlus ? '+' : '');
      if (current >= num) clearInterval(interval);
    }, 30);
  };

  const trustObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      counters.forEach(el => animateCounter(el));
    }
  }, { threshold: 0.5 });

  const trustSection = document.getElementById('trust');
  if (trustSection) trustObserver.observe(trustSection);

  /* ─── 7. Formulaire de contact ───────────────────────────────────────── */
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');
  const submitBtn = document.getElementById('form-submit');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    // Validation simple
    const name = form.querySelector('#name').value.trim();
    const contact = form.querySelector('#contact-email').value.trim();
    const service = form.querySelector('#service').value;
    const message = form.querySelector('#message').value.trim();

    if (!name || !contact || !service || !message) {
      errorMsg.textContent = '❌ Veuillez remplir tous les champs obligatoires.';
      errorMsg.style.display = 'block';
      return;
    }

    // État loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="animation:spin 1s linear infinite">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
      </svg>
      Envoi en cours…
    `;

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successMsg.style.display = 'block';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      // Fallback WhatsApp si Formspree non configuré
      const msg = `Bonjour ETS,%0A%0ANom: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
      errorMsg.innerHTML = `❌ Erreur d'envoi. <a href="https://wa.me/2250171856777?text=${msg}" target="_blank" rel="noopener" style="color:var(--brand-blue);font-weight:700;">Contactez-nous via WhatsApp →</a>`;
      errorMsg.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Envoyer ma demande <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    }
  });

  /* ─── 8. Année dynamique footer ──────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ─── 9. CSS spin animation (pour le bouton submit) ──────────────────── */
  const styleTag = document.createElement('style');
  styleTag.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
  document.head.appendChild(styleTag);

});
