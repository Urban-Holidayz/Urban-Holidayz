'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);






document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.getElementById('nextButton');
  const prevBtn = document.getElementById('prevButton');
  const galleryImages = document.querySelectorAll('.gallery-image img');
  const additionalImages = document.querySelectorAll('#additional-images img');
  const allImages = [...galleryImages, ...additionalImages];
  let currentIndex = 0;

  const openModal = (index) => {
    currentIndex = index;
    modal.style.display = 'block';
    modalImage.src = allImages[currentIndex].src;
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  const showNextImage = () => {
    currentIndex = (currentIndex + 1) % allImages.length;
    modalImage.src = allImages[currentIndex].src;
  };

  const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    modalImage.src = allImages[currentIndex].src;
  };

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });

  closeBtn.addEventListener('click', closeModal);
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Preload additional images
  additionalImages.forEach((img) => {
    const preloader = new Image();
    preloader.src = img.src;
  });
});



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none"
})