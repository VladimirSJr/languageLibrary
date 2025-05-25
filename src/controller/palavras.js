import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS palavras (id INTEGER PRIMARY KEY AUTOINCREMENT, palavra TEXT NOT NULL, significado TEXT NOT NULL)')
    })
}

export async function insertPalavra(req,res) {
    let {palavra, significado} = req.body
    openDb().then(db=>{
        db.run('INSERT INTO palavras (palavra, significado) VALUES (?,?)', [palavra, significado])
    })
    res.json({
        "statusCode": 200
    })
}

export async function updatePalavra(req,res) {
    let palavra = req.body
    openDb().then(db=>{
        db.run('UPDATE palavras SET palavra=?, significado=? WHERE id=?', [palavra.palavra, palavra.significado, palavra.id])
    })
    res.json({
        "statusCode": 200
    })
}

export async function selectPalavras(req,res) {
    openDb().then(db=>{
        db.all('SELECT * FROM palavras')
        .then(palavras => res.json(palavras))
    })
}

export async function selectPalavra(req,res) {
    let palavraBuscar = req.params.palavra
    openDb().then(db=>{
        db.get('SELECT * FROM palavras WHERE palavra=?', [palavraBuscar])
        .then(palavra=>res.json(palavra))
    })
}

export async function deletePalavra(req,res) {
    let palavraExcluir = req.params.palavra
    openDb().then(db=>{
        db.get('DELETE FROM palavras WHERE palavra=?', [palavraExcluir])
        .then(palavra=>res.json(palavra))
    })
    res.json({
        "statusCode": 200
    })
}