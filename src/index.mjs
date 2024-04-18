import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('<h1>Bievenido a mi API</h1>'))

app.get('/products', (req, res) => res.send('Mostrando productos en formato json...'))

app.get('/products/:id', (req, res) => {
  res.send('Mostrando producto con el ID...')
})

app.listen(3000, () => console.log('Servidor ejecutandose http://localhost:3000'))
