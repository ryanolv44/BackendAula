import express from "express"

const router = express.Router()

//rotas do user /user
//rotas oo get /user/

router.get('/', (req, res) => {
    res.json({message: 'essa rota é /produto'})
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    res.json({message: 'Esta rota é a rota /produto/:id '+'ID = '+id})
})

router.post('/', (req, res) =>{
    const user = req.body
    res.json({message: 'essa é a rota POST /user'})
})

router.put('/', (req, res) =>{
    res.json({message: 'essa é a rota PUT /user'})
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    res.json({message: 'Esta rota é a rota DELETE /user/:id '+'ID = '+id})
})

export default router