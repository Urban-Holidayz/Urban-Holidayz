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

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  if (loader) {
    loader.style.display = "block"; // Show preloader
    // Hide preloader after a short delay to ensure it is visible during page load
    setTimeout(function() {
      loader.style.display = "none";
    }, 1000); // Adjust the delay as needed
  }
});




 // Set default date to today
 document.getElementById('checkin').valueAsDate = new Date();

 async function handleSubmit(event) {
   event.preventDefault();  // Prevent the default form submission

   const form = document.getElementById('tourSearchForm');
   if (form.checkValidity()) {
     const formData = new FormData(form);

     // Show loading animation
     Swal.fire({
       title: 'Submitting your inquiry...',
       text: 'Please wait while we process your request.',
       allowOutsideClick: false,
       didOpen: () => {
         Swal.showLoading();
       }
     });

     try {
       const response = await fetch(form.action, {
         method: 'POST',
         body: formData,
       });

       const data = await response.json();
       console.log('Success:', data);

       // Show success message
       Swal.fire({
         icon: 'success',
         title: 'Thank you for submitting!',
         text: 'We will reach out to you soon.',
         confirmButtonText: 'OK'
       }).then(() => {
         // Store the current scroll position
         localStorage.setItem('scrollPosition', window.scrollY);
         // Refresh the page
         location.reload();
       });
     } catch (error) {
       console.error('Error:', error);

       // Show error message
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'There was an error submitting the form.',
         confirmButtonText: 'OK'
       });
     }
   } else {
     form.reportValidity();
   }
 }

 // Restore the scroll position after the page reloads
 window.addEventListener('load', () => {
   const scrollPosition = localStorage.getItem('scrollPosition');
   if (scrollPosition) {
     window.scrollTo(0, parseInt(scrollPosition, 10));
     localStorage.removeItem('scrollPosition');  // Clear the stored position
   }
 });









document.getElementById('see-more-button').addEventListener('click', function() {
  var additionalImages = document.getElementById('additional-images');
  if (additionalImages.style.display === 'none' || additionalImages.style.display === '') {
    additionalImages.style.display = 'block';
    this.textContent = 'See Less Images'; // Optionally change the button text
  } else {
    additionalImages.style.display = 'none';
    this.textContent = 'See More Images'; // Optionally change the button text
  }
});
  





document.getElementById('see-more-button').addEventListener('click', function() {
  var modal = document.getElementById('additional-images-modal');
  modal.style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
  var modal = document.getElementById('additional-images-modal');
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  var modal = document.getElementById('additional-images-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// JavaScript for image modal and swipe functionality

let modal = document.getElementById("imageModal");
let modalImage = document.getElementById("modalImage");
let closeBtn = document.querySelector(".close");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

// Generate image paths for img1.webp to img29.webp in the ./assets/images/ directory
let images = [];
for (let i = 1; i <= 33; i++) {
  images.push(`./assets/images/img${i}.webp`);
}

let currentIndex = 0;

function openModal(index) {
  if (modal && modalImage && images.length > 0) {
    modal.style.display = "block";
    currentIndex = index;
    modalImage.src = images[currentIndex];
    console.log('Modal opened with image:', modalImage.src);
  } else {
    console.error("Modal, modalImage, or images array not properly initialized");
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

function showPrevImage() {
  if (images.length > 0) {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    if (modalImage) {
      modalImage.src = images[currentIndex];
      console.log('Previous image displayed:', modalImage.src);
    }
  }
}

function showNextImage() {
  if (images.length > 0) {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    if (modalImage) {
      modalImage.src = images[currentIndex];
      console.log('Next image displayed:', modalImage.src);
    }
  }
}

if (closeBtn) closeBtn.onclick = closeModal;
if (prevButton) prevButton.onclick = showPrevImage;
if (nextButton) nextButton.onclick = showNextImage;

let startX = 0;
let startY = 0;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  console.log('Touch start:', startX, startY);
}

function handleTouchMove(event) {
  if (startX === 0 && startY === 0) {
    return;
  }

  let diffX = startX - event.touches[0].clientX;
  let diffY = startY - event.touches[0].clientY;

  console.log('Touch move:', diffX, diffY);

  // Detect swipe direction and distance
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 34) {
    if (diffX > 0) {
      console.log('Swiped left');
      showNextImage(); // Swipe left
    } else {
      console.log('Swiped right');
      showPrevImage(); // Swipe right
    }
    startX = 0;
    startY = 0;
  }
}

if (modal) {
  modal.addEventListener("touchstart", handleTouchStart, false);
  modal.addEventListener("touchmove", handleTouchMove, false);
}










