import express from 'express'
import { getProduct, getProductById, index } from './controlle.mjs'

const app = express()

app.get('/', index)
app.get('/products', getProduct)
app.get('/products/:id', getProductById)

app.listen(3000, () => console.log('Servidor ejecutandose http://localhost:3000'))
