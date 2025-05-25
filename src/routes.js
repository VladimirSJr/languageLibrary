import { Router } from "express";
import { createTable, insertPalavra, selectPalavra, selectPalavras, updatePalavra, deletePalavra } from './controller/palavras.js'

const router = Router()

router.get('/', (req,res)=> {
    res.render('index')
})

router.get('/palavras', selectPalavras)
router.get('/palavra/:palavra', selectPalavra)
router.post('/palavra', insertPalavra)
router.put('/palavra/', updatePalavra)
router.delete('/palavra/:palavra', deletePalavra)



export default router;