// Get the menu icon and the menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

function orderNow(productName, productPrice) {
    alert(`You have chosen to order: ${productName} for ${productPrice}.`);
    // You can redirect to an order form, send data to a server, or display a modal here
    // Example: window.location.href = 'order-form.html';
}



// Swiper for Product Section
var swiperProduct = new Swiper(".product-row", {
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


// Swiper for Client Review Section
var swiperReview = new Swiper(".review-row", {
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
    },
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

