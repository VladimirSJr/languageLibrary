//Criar palavra

const btnSalvar = document.querySelector('#salvar')

btnSalvar.addEventListener('click', ()=>{
    const palavra = getDadosForm()
    enviarDadosApiCriar(palavra)
})

function getDadosForm(){
    const inputPalavra = document.querySelector('#criarpalavra')
    const inputSignificado = document.querySelector('#criarsignificado')

    if(inputPalavra.value === null || inputSignificado.value === null){
        console.log('Campos vazios!')
        return;
    }

    const palavraCriar = {
        palavra: inputPalavra.value,
        significado: inputSignificado.value
    }
    return palavraCriar
}

async function enviarDadosApiCriar(palavra) {
    const resposta = await fetch('http://localhost:3000/palavra', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(palavra)
    })
    if(resposta.status === 200){
        limparCampo()
        window.location.reload()
    }else{
        console.log('Erro ao adicionar palavra!')
    }
}
function limparCampo(){
    document.querySelector('#criarpalavra').value = ''
    document.querySelector('#criarsignificado').value = ''
}