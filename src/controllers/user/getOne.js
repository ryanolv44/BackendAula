const getOne = ('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota /user/:id '+'ID = '+id})
})

export default getOne