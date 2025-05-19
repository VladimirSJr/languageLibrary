//Consultar palavras

async function consultarPalavras() {
    const retorno = await fetch('http://localhost:3000/palavras')
    const palavras = await retorno.json();

    buscarRegistros(palavras)
}

function buscarRegistros(palavras){
    const card = document.querySelector('#card')
    palavras.forEach(words => {
        const wordsHtml = `
        <div class = "palExEd">
        <div id="${words.id}" value="${words.id}"></div>
        <div id="Showpalavra" value="${words.palavra}"><p>${words.palavra}</p></div>
        <div class="ExEd">
        <div class="editar"><button id="buttoneditar" onclick="toggleEditar(event)" aria-haspopup="true" aria-controls="menu" aria-expanded="false"><img src="edit.svg" alt="editar"></button></div>
        <div class="excluir"><button id="buttonexcluir"onclick="toggleExcluir(event)" aria-haspopup="true" aria-controls="menu" aria-expanded="false"><img src="delete.svg" alt="excluir"></button></div>
        </div>
        </div>
        <div id="Showsignificado" value="${words.significado}"><p>${words.significado}</p></div>`

        card.innerHTML = card.innerHTML + wordsHtml
    })        
}

consultarPalavras()