const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// iniciando o app
const app = express() 

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
)
requireDir('./src/models')

const Product = mongoose.model('Product')

//primeira rota
app.get('/', ( req , res ) => {
    Product.create({
        title: 'React Native',
        description: 'fazendo app nativo ninja',
        url: 'http://hithhub.com/facebook/react-native'
    })

    return res.send('HELLO AAAAAA')
})

app.listen(8089);