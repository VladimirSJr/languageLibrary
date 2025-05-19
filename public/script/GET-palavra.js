//Consultar palavra

const Consultar = document.querySelector('#selectPalavra');

Consultar.addEventListener('click', ()=>{
    const palavra = getDadoForm();
    enviarDadosApiConsultar(palavra);
})

function getDadoForm(){
    const inputPalavra = document.querySelector('#consultarpalavra');

    if(inputPalavra.value === null){
        console.log('Campos vazios!');
        return;
    }

    const palavraConsultar = {
        palavra: inputPalavra.value
    }
    return palavraConsultar;
}
async function enviarDadosApiConsultar(palavra) {
    const resposta = await fetch('http://localhost:3000/palavra', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(palavra)
    })
    if(resposta.status === 200){
        console.log("Palavra consultada!");
    }
    const word = await resposta.json()
    buscarRegistro(word)
}

function buscarRegistro(palavra){
    const resultBusca = document.getElementById('resultBusca');
    if(palavra){
        resultBusca.innerHTML = `Significado: ${palavra.significado}`;
    }else{
        resultBusca.innerHTML = `Registro não encontrado`;
    };
};