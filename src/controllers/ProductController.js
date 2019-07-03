const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async index (req, res) { // retorna a lista completa de produtos
        // const products = await Product.find() //retorna a lista toda sem paginar
        const { page = 1 } = req.query;
        const products = await Product.paginate({},{ page, limit: 10 })
        return res.json(products);
    },

    async show(req, res){ // retorna um produto pelo id
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    async store(req, res){ // cria um produto
        const product = await Product.create(req.body)
        return res.json(product)
    },

    async update(req, res){ // atualiza um produto
        const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product)
    },

    async destroy(req, res){
        await Product.findOneAndDelete(req.params.id)
        return res.send()
    }
}