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

        const baixoConteudo = document.querySelector('.baixo-conteudo span');
        baixoConteudo.style.color = 'black';

        const tituloSpan = document.querySelector('.titulo span');
        tituloSpan.style.color = 'black';

        const textosCima = document.querySelectorAll('.texto-cima p');
        textosCima.forEach(texto => {
            texto.style.color = 'black';
        });
    } else {
        // Se o novo vídeo for 'RedBurningSparks.mp4', voltar as cores ao normal
        const spanBaixoNav = document.querySelector('.texto-baixo-nav span');
        spanBaixoNav.style.color = '#f44336';

        const tituloSpan = document.querySelector('.titulo span');
        tituloSpan.style.color = '#f44336';

        const textosCima = document.querySelectorAll('.texto-cima p');
        textosCima.forEach(texto => {
            texto.style.color = 'white';
        });
    }
}