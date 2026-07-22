/* ================================
   MxcFit — menu.js
   ================================ */

// Pega os elementos da página
const btnHamburger = document.getElementById('hamburger-btn');
const menuNav      = document.getElementById('navbar-items');
const header       = document.querySelector('header');

// Variável que controla se o menu está aberto ou fechado
let menuAberto = false;

/* ── Função principal: abre ou fecha o menu ── */
function alternarMenu() {
  menuAberto = !menuAberto; // inverte: se era false vira true, se era true vira false

  // Adiciona ou remove a classe "open" nos elementos
  btnHamburger.classList.toggle('open', menuAberto);
  menuNav.classList.toggle('open', menuAberto);

  // Acessibilidade: avisa leitores de tela se o menu está aberto ou fechado
  btnHamburger.setAttribute('aria-expanded', menuAberto);
}

/* ── Função para fechar o menu ── */
function fecharMenu() {
  menuAberto = false;
  btnHamburger.classList.remove('open');
  menuNav.classList.remove('open');
  btnHamburger.setAttribute('aria-expanded', false);
}

/* ── Eventos ── */

// Clique no botão hamburguer
btnHamburger.addEventListener('click', alternarMenu);

// Clique em qualquer link do menu → fecha
menuNav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', fecharMenu);
});

// Pressionar ESC no teclado → fecha
document.addEventListener('keydown', function(evento) {
  if (evento.key === 'Escape') fecharMenu();
});

// Clicar fora do header → fecha
document.addEventListener('click', function(evento) {
  const clicouForaDoHeader = !header.contains(evento.target);
  if (clicouForaDoHeader && menuAberto) fecharMenu();
});

// Redimensionou pra desktop → fecha e limpa
window.addEventListener('resize', function() {
  if (window.innerWidth > 650) fecharMenu();
});