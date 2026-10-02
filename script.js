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

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const cards = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('is-pending');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.06 });
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top > window.innerHeight) card.classList.add('is-pending');
    observer.observe(card);
  });
  motionPreference.addEventListener('change', ({ matches }) => {
    if (!matches) return;
    observer.disconnect();
    cards.forEach((card) => card.classList.remove('is-pending'));
  });
}
