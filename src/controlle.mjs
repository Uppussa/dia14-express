import { pool } from './db.mjs'

export const index = (req, res) => res.send('<h1>Bievenido a mi API</h1>')

export const getProduct = async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM product')
  } catch (error) {

  }
}

export const getProductById = (req, res) => {
  res.send('Mostrando producto con el ID...')
}

export const storeProduct = async (res, req) => {
  res.status(201).json({ Message: 'Creado' })
}
