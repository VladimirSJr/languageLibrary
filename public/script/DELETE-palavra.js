//Excluir palavra
const excluir = document.querySelector('#excluir')

excluir.addEventListener('click', ()=>{
    const palavra = getDadoFormExcluir()
    enviarDadosApiExcluir(palavra)
})

function getDadoFormExcluir(){
    const inputPalavra = document.querySelector('#excluirpalavra').value

    if(inputPalavra === null){
        console.log('Campos vazios!')
        return;
    }

    return inputPalavra
}

async function enviarDadosApiExcluir(palavra) {
    const resposta = await fetch(`http://localhost:3000/palavra/${palavra}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    if(resposta.status === 200){
        window.location.reload()
        console.log('Palavra excluída!')
    }else{
        console.log('Erro ao excluir palavra!')
    }
}
