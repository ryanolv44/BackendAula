
const listAll = ('/', (req, res) => {
    const user = req.body
    res.json({message: 'Esta é a rota GET /user/', user})
})

export default listAll