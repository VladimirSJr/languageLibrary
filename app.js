import express from 'express'
import { openDb } from './src/configDB.js'
import { createTable, insertPalavra, selectPalavra, selectPalavras, updatePalavra, deletePalavra } from './src/controller/palavras.js'
import router from './src/routes.js'
import fs from 'fs'
import https from 'https'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(express.json())
app.use(router);
app.use(cors())
createTable()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=> console.log("Rodando em https"))