import productModel from "../../models/productModel.js"

const create = async (req, res) => {
    try{
        const product = req.body
        const newUser = await productModel.create(product)
        return res.json({
            success: `Usuário ${newProduct.id} criado com sucesso!`,
            user: newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create