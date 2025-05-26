document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-box');
  elements.forEach(el => {
    el.classList.add('animated');
  });
});
