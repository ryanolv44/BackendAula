import express from 'express'
import listAll from '../controllers/product/listAll.js'
import getOne from '../controllers/product/getOne.js'
import create from '../controllers/product/create.js'
import update from '../controllers/product/update.js'
import remove from '../controllers/product/remove.js'

const router = express.Router()

router.get('/', listAll)

router.get('/:id', getOne)

router.post('/', create)

router.put('/', update)

router.delete('/:id', remove)

export default router