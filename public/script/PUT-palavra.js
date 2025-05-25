//Editar palavra

const editar = document.querySelector('#editar');

editar.addEventListener('click', ()=>{
    const palavra = getDadosFormEditar();
    enviarDadosApiAtualizar(palavra);
})

function getDadosFormEditar(){
    const id = document.querySelector('#editarid');
    const Palavra = document.querySelector('#editarpalavra');
    const Significado = document.querySelector('#editarsignificado');

    if(Palavra.value === null || Significado.value === null){
        console.log('Campos vazios!');
        return;
    }

    const palavraAtualizar = {
        id: id.value,
        palavra: Palavra.value,
        significado: Significado.value
    }
    return palavraAtualizar;
}

async function enviarDadosApiAtualizar(palavra) {
    const resposta = await fetch('http://localhost:3000/palavra/', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(palavra)
    })
    if(resposta.status === 200){
        limparCampo();
        window.location.reload();
    }else{
        console.log('Erro ao adicionar palavra!');
    }
}
function limparCampo(){
    document.querySelector('#editarpalavra').value = ''
    document.querySelector('#editarsignificado').value = ''
}