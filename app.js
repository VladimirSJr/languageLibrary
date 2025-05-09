import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

if(typeof window !== "undefined"){
    window.addEventListener('load', carregado);

    function carregado(){

        async function criarEPopularTabelaPalavraSignificado(palavra, significado) {
            const db = await open({
                filename: './banco.db',
                driver: sqlite3.Database
            });

            db.run('CREATE TABLE IF NOT EXISTS palavras (id INTEGER PRIMARY KEY, palavra TEXT, significado TEXT)');
    
            document.getElementById('salvar').addEventListener('click', salvar);
            const palavraCriar = document.getElementById('criarpalavra').value;
            const significadoCriar = document.getElementById('criarsignificado').value;

            function salvar(){
                db.run("INSERT INTO palavras (palavra, significado) VALEUS (?, ?)", [palavraCriar, significadoCriar]);
            };
        };
        criarEPopularTabelaPalavraSignificado();
    };
};