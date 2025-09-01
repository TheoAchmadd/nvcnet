// Navbar Toggle
const navnav = document.querySelector('.navigasi');
const menu = document.querySelector('#hamburger');

menu.addEventListener('click', (e) => {
  e.preventDefault();
  navnav.classList.toggle('active');
});

// Tutup navbar saat klik link
document.querySelectorAll('.navigasi a').forEach(link => {
  link.addEventListener('click', () => {
    navnav.classList.remove('active');
  });
});

// Tutup navbar saat klik di luar
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !navnav.contains(e.target)) {
    navnav.classList.remove('active');
  }
});

// Smooth Scroll dengan offset
function scrolotomatis(id) {
  const target = document.getElementById(id);
  const yOffset = -80; // tinggi navbar
  const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

// Intersection Observer untuk animasi
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
