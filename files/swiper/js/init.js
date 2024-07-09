const lazyImages = document.querySelectorAll('img[loading="lazy"]');
function addLoadedClass(image) {
   const parentElement = image.parentElement;
   if (image.complete) {
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() {
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass);

const aboutStudyingSlider = document.querySelector('.about-studying__slider')
if (aboutStudyingSlider) {
   new Swiper(aboutStudyingSlider, {
      navigation: {
         prevEl: '#about-studying-slider-swiper-button-prev',
         nextEl: '#about-studying-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      autoHeight: true,
      loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });
}