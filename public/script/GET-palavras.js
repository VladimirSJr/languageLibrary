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
        <div id="${words.id}" value="${words.id}"><p>Id: ${words.id}</p></div>
        <div id="Showpalavra" value="${words.palavra}"><p>${words.palavra}</p></div>
        </div>
        <div id="Showsignificado" value="${words.significado}"><p>${words.significado}</p></div>
        `

        card.innerHTML = card.innerHTML + wordsHtml
    })        
}

consultarPalavras()