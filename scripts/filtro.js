
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu-link");
  const produtos = document.querySelectorAll(".card-produto");

  menuLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const categoria = link.dataset.categoria;
      produtos.forEach(produto => {
        const pertenceCategoria = produto.dataset.categoria === categoria || categoria === "todas";
        produto.style.display = pertenceCategoria ? "block" : "none";
      });
      document.querySelector("#nossas-mercadorias").scrollIntoView({ behavior: "smooth" });
    });
  });
});
