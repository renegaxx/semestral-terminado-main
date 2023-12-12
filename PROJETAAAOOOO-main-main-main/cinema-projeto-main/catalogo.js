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

// TROCAR DE IMAGENS PARA NOVO/ANTIGO
function toggleConteudo() {
    // Seleciona o elemento pelo ID
    var catalogo = document.getElementById('catalogo-baixo1');

    // Limpa o conteúdo atual
    catalogo.innerHTML = '';

    // Adiciona novo conteúdo
    var novoConteudo = document.createElement('div');
    novoConteudo.className = 'conteudo-catalogo';
    novoConteudo.innerHTML = `
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/15579_medio.jpg">
            <p>O Silêncio da Vingança</p>
            <i>Ação / 2023 / EUA</i>
        </div>
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/15562_medio.jpg">
            <p>Feriado Sangrento</p>
            <i>Terror / 2023 / EUA</i>
        </div>
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/12501_medio.jpg">
            <p>Aquaman 2: O Reino Perdido</p>
            <i>Herói/Ação / 2023 / EUA</i>
        </div>
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/14776_medio.jpg">
            <p>O Senhor do Caos</p>
            <i>Terror / 2023 / EUA</i>
        </div>
    `;



    
    

    // Adiciona o novo conteúdo ao catálogo
    catalogo.appendChild(novoConteudo);
}

function toggleConteudo() {
    // Seleciona o elemento pelo ID
    var catalogo = document.getElementById('catalogo-baixo1');

    // Limpa o conteúdo atual
    catalogo.innerHTML = '';

    // Adiciona novo conteúdo
    var novoConteudo = document.createElement('div');
    novoConteudo.className = 'conteudo-catalogo';
    novoConteudo.innerHTML = `
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/15579_medio.jpg">
            <p>O Silêncio da Vingança</p>
            <i>Ação / 2023 / EUA</i>
        </div>
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/15562_medio.jpg">
            <p>Feriado Sangrento</p>
            <i>Terror / 2023 / EUA</i>
        </div>
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/12501_medio.jpg">
            <p>Aquaman 2: O Reino Perdido</p>
            <i>Herói/Ação / 2023 / EUA</i>
        </div>
        <div class="img-catalogo">
            <img src="http://www.claquete.com.br/fotos/filmes/poster/14776_medio.jpg">
            <p>O Senhor do Caos</p>
            <i>Terror / 2023 / EUA</i>
        </div>
    `;



    
    

    // Adiciona o novo conteúdo ao catálogo
    catalogo.appendChild(novoConteudo);
}