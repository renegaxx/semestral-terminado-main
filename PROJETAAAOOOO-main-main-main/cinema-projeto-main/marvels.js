function togglePesquisa() {
    var searchContainer = document.querySelector('.search-container');
    var input = document.getElementById('searchInput');

    if (searchContainer.style.maxWidth === '0px' || searchContainer.style.maxWidth === '') {
        // Abrir a barra de pesquisa
        searchContainer.style.maxWidth = '200px';
        input.style.width = '170px'; // Ajuste conforme necessário
        input.style.padding = '5px';
        input.style.height = '10px';
        input.style.opacity = '1';
        input.style.border = 'none';
        input.focus();
    } else {
        // Fechar a barra de pesquisa
        searchContainer.style.maxWidth = '0';
        input.style.width = '0';
        input.style.padding = '0';
        input.style.opacity = '0';
    }
}
// fechar menu dentro do menu
function fecharMenu() {
    var menuDireito = document.getElementById('menuDireito');
    menuDireito.style.display = 'none';
}


function toggleMenu() {
    var menuDireito = document.getElementById('menuDireito');

    if (menuDireito.style.display === 'none' || menuDireito.style.display === '') {
        // Abrir o menu direito
        menuDireito.style.display = 'block';
    } else {
        // Fechar o menu direito
        menuDireito.style.display = 'none';
    }
}

const imageContainer = document.getElementById('image-container');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 30;
    imageContainer.style.transform = `translateX(${offset}vw)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % 2;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + 2) % 2;
    showImage(currentIndex);
}

// Configurar eventos de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});

// Configurar intervalo de troca automática de imagem
setInterval(nextImage, 7000);