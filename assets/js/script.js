// tambah class aktif
const navnav = document.querySelector('.navigasi');

// ketika hamburger di klik
document.querySelector('#hamburger').onclick = () => {
    navnav.classList.toggle('active');
};

// klik dimana saja untuk menghilangkan side bar
const menu = document.querySelector('#hamburger');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navnav.contains(e.target)) {
        navnav.classList.remove('active');
    }
})

function kebawah(id) {
    // Sembunyikan semua elemen dengan class 'options'
    const allOptions = document.querySelectorAll('.options');
    allOptions.forEach(option => {
        if (option.id !== id) {
            option.style.display = 'none';
        }
    });

    // Toggle tampilan options yang diklik
    const current = document.getElementById(id);
    if (current.style.display === 'block') {
        current.style.display = 'none';
    } else {
        current.style.display = 'block';
    }
}


function scrolotomatis(id) {
    const target = document.getElementById(id);
    const offset = 150; // Ubah sesuai tinggi navbar kamu
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// animasi teks penjelasan
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // hapus class jika keluar dari layar
      }
    });
  }, {
    threshold: 0.3
  });

  const hiddenElements = document.querySelectorAll('.fade-in-up');
  hiddenElements.forEach(el => observer.observe(el));