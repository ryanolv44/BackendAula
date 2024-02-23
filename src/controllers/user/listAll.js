import userModel from "../../models/userModel.js"

const listAll =  ('/', async (req, res) => {
    try {
        const users = await userModel.getAll()
        res.json({success: 'Usuarios listados com sucesso!', users})
            
    } catch (error) {
        console.log(error)

    }
    const users = await userModel.getAll()
    res.json({success: 'Usuarios listados com sucesso!', users})
})

export default listAll