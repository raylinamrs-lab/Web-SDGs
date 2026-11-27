const backToTopBtn = document.getElementById('backToTop');
const sections = document.querySelectorAll('header[id], section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const cards = document.querySelectorAll('section.card');

const progressBar = document.createElement('div');
progressBar.className = 'scroll-bar';
document.body.prepend(progressBar);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

cards.forEach((card) => revealObserver.observe(card));

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${scrollPercent}%`;

  if (scrollTop > 350) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }

  let currentId = '';
  sections.forEach((sec) => {
    const top = sec.offsetTop - 130;
    if (scrollTop >= top) {
      currentId = sec.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});