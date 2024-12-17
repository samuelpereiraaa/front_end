// evento para enviar o formulario
document.getElementById('forms').addEventListener('submit', (event) => {
    const form = event.currentTarget
    const data = {
        nome: form.nome.value,
        endereco: form.endereco.value,
        diasDaSemana: form.diasDaSemana.value,
        abertura: form.abertura.value,
        encerramento: form.encerramento.value,
    }
// preparação de envio
    console.log('preparando o envio do formulário...')
    form.nome.disabled = true;
    form.endereco.disabled = true;
    form.diasDaSemana.disabled = true;
    form.abertura.disabled = true;
    form.encerramento.disabled = true;

    window.localStorage.setItem('informações',  JSON.stringify(data))
})

// carregamento da pagina
window.onload = () => {
    const form = document.getElementById('form')
    let data = window.localStorage.getItem('informações')
    if(data) {
        data = JSON.parse(data)
        form.nome.value = data.nome
        form.endereco.value = data.endereco
        form.diasDaSemana.value = data.diasDaSemana
        form.abertura.value = data.abertura
        form.encerramento.value = data.encerramento
    }
}