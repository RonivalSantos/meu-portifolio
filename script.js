// const mobileBtn = document.querySelector("#mobile-btn");
// const mobileMenu = document.querySelector("#mobile-menu");
// mobileBtn.onclick = () => {
//   mobileMenu.classList.toggle("ativo");
//   mobileBtn.classList.toggle("trocar");
// };
const mobileBtn = document.querySelector("#mobile-btn");
  const mobileMenu = document.querySelector("#mobile-menu");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Função para fechar menu
  function fecharMenu() {
    mobileMenu.classList.remove("ativo");
    mobileBtn.classList.remove("trocar");
    overlay.classList.remove("ativo");
  }

  mobileBtn.onclick = () => {
    mobileMenu.classList.toggle("ativo");
    mobileBtn.classList.toggle("trocar");
    overlay.classList.toggle("ativo");
  };

  // Fecha o menu ao clicar fora
  overlay.onclick = fecharMenu;

  // Fecha o menu ao clicar em qualquer link dentro dele
  const linksMenu = mobileMenu.querySelectorAll("a");
  linksMenu.forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });





const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});