var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 4
      }
    },
  });

  // Swiper for Blog Section
var swiperBlogs = new Swiper(".blogs-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 1,
      },
      1024: {
          slidesPerView: 1,
      },

  },
});

document.addEventListener('DOMContentLoaded', () => {
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          console.log('Hovered over card:', card.querySelector('h3').textContent);
      });
      card.addEventListener('mouseleave', () => {
          console.log('Mouse left card:', card.querySelector('h3').textContent);
      });
  });
});

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
 
 // Toggle FAQ Answers
 function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// Scroll to FAQ Section
function scrollToFaq() {
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
}


const carousel = document.querySelector('.team-carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Track the current scroll position
let scrollPosition = 0;

// Adjust the scroll step (equal to one card's width + gap)
const scrollStep = 270; // Adjust this to match the card width + gap

// Previous Button Click
prevButton.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - scrollStep, 0);
  carousel.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
});

// Next Button Click
nextButton.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  scrollPosition = Math.min(scrollPosition + scrollStep, maxScroll);
  carousel.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
});

// script.js
function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Team section loaded');
});







