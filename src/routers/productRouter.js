import express from 'express'
import listAll from '../controllers/product/listAll'
import getOne from '../controllers/product/getOne'
import create from '../controllers/product/create'
import update from '../controllers/product/update'
import remove from '../controllers/product/remove'

const router = express.Router()

router.get('/', listAll)

router.get('/:id', getOne)

router.post('/', create)

router.put('/', update)

router.delete('/:id', remove)

export default router