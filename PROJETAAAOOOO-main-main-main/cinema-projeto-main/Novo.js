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

// BOTAO DE TEMAAASSSSSSSSS
function alterarEstilo() {
    // Alterar o vídeo de fundo
    const backgroundVideo = document.querySelector('.video-bg');
    const novoVideo = backgroundVideo.src.includes('AllBackgroundVideos.mp4') ? 'RedPaintCombustion.mp4' : 'AllBackgroundVideos.mp4';
    backgroundVideo.src = novoVideo;
    backgroundVideo.load();
    backgroundVideo.play();

    // Verificar qual vídeo está definido como o vídeo de fundo
    if (novoVideo === 'RedPaintCombustion.mp4') {
        // Se o novo vídeo for 'RedPaintCombustion.mp4', alterar as cores para preto
        const spanBaixoNav = document.querySelector('.texto-baixo-nav span');
        spanBaixoNav.style.color = 'black';

        const tituloNovo = document.querySelectorAll('.titulo-novo span');
        tituloNovo.forEach(texto => {
            texto.style.color = 'black';
    });
    const conteudoNovo = document.querySelectorAll('.conteudo-novo span');
        conteudoNovo.forEach(texto => {
            texto.style.color = 'black';
    });

    const textMenu = document.querySelectorAll('.text-menu span');
        textMenu.forEach(texto => {
            texto.style.color = 'black';
    });


        const textosCima = document.querySelectorAll('.texto-cima p');
        textosCima.forEach(texto => {
            texto.style.color = 'black';
        });
    } else {
        // Se o novo vídeo for 'RedBurningSparks.mp4', voltar as cores ao normal
        const spanBaixoNav = document.querySelector('.texto-baixo-nav span');
        spanBaixoNav.style.color = '#f44336';

        const textosCima = document.querySelectorAll('.texto-cima p');
        textosCima.forEach(texto => {
            texto.style.color = 'white';
        });
    }
}