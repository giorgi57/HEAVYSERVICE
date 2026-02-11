// ბურგერ მენიუ
const burger = document.getElementById('burger-btn');
const menu = document.getElementById('nav-menu');

burger.onclick = () => {
    menu.classList.toggle('active');
};

// დღე და ღამე
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// გალერეის გახსნა
function openLightbox(el) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = el.querySelector('img').src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}