'use strict';

// Mensagens contextuais; os hrefs do HTML também funcionam sem JavaScript.
const whatsappNumber = '5569999976279';
const whatsappMessages = {
  "geral": "Olá! Gostaria de agendar um horário no Pet Shop É o Bicho.",
  "banho": "Olá! Gostaria de agendar um banho para meu pet no Pet Shop É o Bicho.",
  "tosa": "Olá! Gostaria de agendar uma tosa para meu pet no Pet Shop É o Bicho.",
  "vacinacao": "Olá! Gostaria de consultar a disponibilidade e agendar vacinação no Pet Shop É o Bicho.",
  "produtos": "Olá! Gostaria de saber quais produtos estão disponíveis no Pet Shop É o Bicho.",
  "acessorios": "Olá! Gostaria de conhecer os acessórios disponíveis no Pet Shop É o Bicho.",
  "localizacao": "Olá! Gostaria de confirmar a localização e os horários do Pet Shop É o Bicho."
};
document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const message = whatsappMessages[link.dataset.whatsapp];
  if (message) link.href = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

function initScrollReveal() {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;

  const elements = [...document.querySelectorAll('.hero, .bento > .service')];
  const reveal = (element) => {
    element.classList.remove('is-pending');
    observer.unobserve(element);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) reveal(target);
    });
  }, { threshold: 0.01 });

  elements.forEach((element) => {
    element.classList.add('scroll-reveal', 'is-pending');
    element.addEventListener('focusin', () => reveal(element), { once: true });
  });

  // Garante um estado inicial pintado, inclusive para a hero.
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (!preference.matches) elements.forEach((element) => observer.observe(element));
  }));

  preference.addEventListener('change', ({ matches }) => {
    if (!matches) return;
    observer.disconnect();
    elements.forEach((element) => element.classList.remove('is-pending'));
  });
}

initScrollReveal();
