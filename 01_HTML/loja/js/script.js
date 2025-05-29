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

// Função para adicionar quantidade e tamanho para o carrinho.

function adicionarCarrinho () {
    // peganndo os elementos quantidade e tamanho
    const tamanhoSelecionado = document.getElementById('tamanho').value
    const quantidadeSelecionada = document.getElementById('quantidade').value


    // alert para mostrar na tela os elementos selecionados 
    alert(` ADICIONADOS AO CARRINHO COM SUCESSO!
            Tamanho: ${tamanhoSelecionado}
            Quantidade: ${quantidadeSelecionada}`)

    // mostrando no console
    console.log(`Tamanho selecionando: ${tamanhoSelecionado}, Quantidade selecionanda: ${quantidadeSelecionada}`)
}
    // pegando o elemento do botao-comprar
    const botaoComprar = document.getElementById('botao-comprar') 

    //adicionando um event linster no botao, para adicionar ao carrinho
    if (botaoComprar) {
        botaoComprar.addEventListener('click', function(event){
            event.preventDefault // retirar o comportamento padrao do botao
            adicionarCarrinho() // adicionando a função ao botao
        }
    )
    }
