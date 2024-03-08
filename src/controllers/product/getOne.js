import productModel from "../../models/productModel.js"

const getOne = async (req, res) => {
    try{
        const id = req.params.id
        const product = await productModel.getOne(+id)
        res.json({
            success: `Usuário ${id} encontrado com sucesso!`,
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getOne