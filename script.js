

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlides(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1}
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += "active";
// }


// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const slideWidth = slides[0].clientWidth;
// let currentIndex = 0;

// function slideTo(index) {
//   slider.style.transform = `translateX(-${slideWidth * index}px)`;
//   currentIndex = index;
// }

// function nextSlide() {
//   if (currentIndex === slides.length - 1) {
//     slideTo(0);
//   } else {
//     slideTo(currentIndex + 1);
//   }
// }

// function prevSlide() {
//   if (currentIndex === 0) {
//     slideTo(slides.length - 1);
//   } else {
//     slideTo(currentIndex - 1);
//   }
// }

// setInterval(nextSlide, 5000);