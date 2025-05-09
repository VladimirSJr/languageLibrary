const btnAbrir = document.getElementById('buttoncriar');
function toggleCriar(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('criarPalavra');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnAbrir.addEventListener('click', toggleCriar);
btnAbrir.addEventListener('touchstart', toggleCriar);

const btnConsultar = document.getElementById('buttonconcultar');
function toggleConsultar(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('consultarPalavra');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnConsultar.addEventListener('click', toggleConsultar);
btnConsultar.addEventListener('touchstart', toggleConsultar);

const btnEditar = document.getElementById('buttoneditar');
function toggleEditar(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('editarPalavra');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnEditar.addEventListener('click', toggleEditar);
btnEditar.addEventListener('touchstart', toggleEditar);

const btnExcluir = document.getElementById('buttonexcluir');
function toggleExcluir(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('excluirPalavra');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnExcluir.addEventListener('click', toggleExcluir);
btnExcluir.addEventListener('touchstart', toggleExcluir);