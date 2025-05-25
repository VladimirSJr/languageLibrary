const consultar = document.querySelector('#selectPalavra')

consultar.addEventListener('click', ()=>{
    const palavra = getDadoForm()
    enviarDadosApiConsultar(palavra)
})
function getDadoForm(){
    const inputPalavra = document.querySelector('#consultarpalavra').value

    if(inputPalavra === null){
        console.log('Campos vazios!')
        return;
    }

    return inputPalavra
}
async function enviarDadosApiConsultar(palavra) {
    const resposta = await fetch(`http://localhost:3000/palavra/${palavra}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    if(resposta.status === 200){
        const significado = await resposta.json();
        buscarRegistro(significado)
    }else{
        console.log('Erro ao consultar palavra!')
    }
}
function buscarRegistro(palavras){
    const card = document.querySelector('#resultBusca')
    const significado = `<p>${palavras.significado}</p>`

    card.innerHTML = card.innerHTML + significado       
}