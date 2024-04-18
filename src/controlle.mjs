export const index = (req, res) => res.send('<h1>Bievenido a mi API</h1>')

export const getProduct = (req, res) => res.send('Mostrando productos en formato json...')

export const getProductById = (req, res) => {
  res.send('Mostrando producto con el ID...')
}
