const backToTopBtn = document.getElementById('backToTop');
const sections = document.querySelectorAll('header[id], section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const cards = document.querySelectorAll('section.card');

const progressBar = document.createElement('div');
progressBar.className = 'scroll-bar';
document.body.prepend(progressBar);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

cards.forEach((card) => observer.observe(card));

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${scrollPercent}%`;

  backToTopBtn.style.display = scrollTop > 300 ? 'flex' : 'none';

  let currentId = '';
  sections.forEach((sec) => {
    if (scrollTop >= sec.offsetTop - 130) {
      currentId = sec.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});