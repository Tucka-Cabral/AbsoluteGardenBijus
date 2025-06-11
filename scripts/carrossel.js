document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 5,
    slidesPerView: 1, // valor inicial
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      428: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1728: {
        slidesPerView: 3
      }
    }
  });
});
