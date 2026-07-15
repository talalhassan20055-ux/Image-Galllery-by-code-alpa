// Saari gallery images select karo
const images = document.querySelectorAll('.gallery-img');

// Lightbox ke elements select karo
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // yeh track karega abhi konsi image khuli hai

// Har image pe click event lagao
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox();
    });
});

// Lightbox kholne ka function
function openLightbox() {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex].src;
}

// Lightbox band karne ka function
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // last ke baad first pe wapas
    lightboxImg.src = images[currentIndex].src;
});

// Prev button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // first ke pehle last pe
    lightboxImg.src = images[currentIndex].src;
});

// Lightbox ke bahar (background) click karne se bhi band ho jaye
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
// Zoom toggle jab lightbox image pe click ho
lightboxImg.addEventListener('click', () => {
    lightboxImg.classList.toggle('zoomed');
});