// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav ul"); // Pastikan kita target elemen <ul> dalam nav

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  // Menutup menu saat area luar navbar diklik
  window.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !navLists.contains(e.target)) {
      navLists.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
    }
  });
};
navSlide();

// Clear form before unload
window.addEventListener("beforeunload", () => {
  // Reset forms only if there are any
  document.querySelectorAll("form").forEach((form) => form.reset());
});

// Certificate Modal Image Viewer
const images = document.querySelectorAll('.certificate-image img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const closeModal = document.querySelector('.modal-close');

// Add click event to each image to show in modal
images.forEach((img) => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = img.src; // Set modal image to the clicked image
  });
});

// Add event to close modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

