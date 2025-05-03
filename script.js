document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetID = link.getAttribute('href');
      const targetSection = document.querySelector(targetID);

      sections.forEach(sec => {
        sec.classList.remove('visible');
        setTimeout(() => sec.classList.add('hidden'), 400); // Wait for fade-out
      });

      setTimeout(() => {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('visible');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    });
  });
});
