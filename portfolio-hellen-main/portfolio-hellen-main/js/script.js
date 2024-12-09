// ===== transforma o menu =====

// seleciona o elemento com a classe menu-hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');

// adiciona um ouvinte de evento de clique ao elemento menuHamburguer
menuHamburguer.addEventListener('click', () => {
    // chama a função toggleMenu quando o menuHamburguer é clicado
    toggleMenu();
});

// define a função toggleMenu
function toggleMenu() {
    // seleciona o elemento com a classe 'nav-responsive'
    const nav = document.querySelector('.nav-responsive');
    
    // alterna a classe 'change' no elemento menuHamburguer
    menuHamburguer.classList.toggle('change');

    // verifica se o elemento menuHamburguer tem a classe change
    if (menuHamburguer.classList.contains('change')) {
        // Se tiver, define o estilo display do elemento nav como block
        nav.style.display = 'block';
    } else {
        // Se não tiver, define o estilo display do elemento nav como none
        nav.style.display = 'none';
    }
    
    // vincula o método sendForm ao contexto atual (this)
    this.sendForm = this.sendForm.bind(this);
}