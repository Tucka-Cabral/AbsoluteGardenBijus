
const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.querySelector(".carrossel");
  const botoes = document.querySelectorAll(".carrossel-botao");
  const container = document.querySelector(".carrossel-container");
  let slideAtual = 0;
  let slidesPorTela = calcularSlidesPorTela();

  function calcularSlidesPorTela() {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 768) return 2;
    return 3;
  }

  function atualizarCarrossel() {
    const slideLargura = carrossel.offsetWidth / slidesPorTela;
    carrossel.scrollTo({
      left: slideAtual * slideLargura,
      behavior: "smooth"
    });
  }

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const direcao = botao.dataset.direcao;
      const totalSlides = container.children.length;

      if (direcao === "esquerda" && slideAtual > 0) slideAtual--;
      if (direcao === "direita" && slideAtual < totalSlides - slidesPorTela) slideAtual++;
      atualizarCarrossel();
    });
  });

  window.addEventListener("resize", () => {
    slidesPorTela = calcularSlidesPorTela();
    atualizarCarrossel();
  });
});