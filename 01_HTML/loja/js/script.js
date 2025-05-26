// Função para trocar a imagem principal e destacar a miniatura ativa
function trocarImagem(novaImagemSrc, miniaturaClicada) {
    // Pega o elemento da imagem principal
    const imagemPrincipal = document.getElementById('imagem-principal-produto');

    // Verifica se o elemento da imagem principal existe
    if (imagemPrincipal) {
        // Altera o src (caminho) da imagem principal
        imagemPrincipal.src = novaImagemSrc;

        // Lida com a classe 'ativa' nas miniaturas
        if (miniaturaClicada) {
            // Remove a classe 'ativa' de todas as miniaturas
            const todasMiniaturas = document.querySelectorAll('.miniatura-img');
            todasMiniaturas.forEach(miniatura => {
                miniatura.classList.remove('ativa');
            });

            // Adiciona a classe 'ativa' à miniatura que foi clicada
            miniaturaClicada.classList.add('ativa');
        }
    } else {
        console.error("Elemento com ID 'imagem-principal-produto' não encontrado.");
    }
}

