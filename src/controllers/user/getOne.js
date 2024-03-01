import userModel from "../../models/userModel"

const getOne = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.getOne(+id)
        res.json({success: `Usuario ${id} enconstrado com sucesso`})
        user    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Deu erro paizão'
        })
    }
}
    

export default getOne