import express from 'express'
import listAll from '../controllers/user/listAll.js'
import getOne from '../controllers/user/getOne.js'
import create from '../controllers/user/create.js'
import update from '../controllers/user/update.js'
import remove from '../controllers/user/remove.js'

const router = express.Router()

router.get('/', listAll)

router.get ('/:id', getOne)

router.post ('/', create)

router.put('/', update)

router.delete('/:id', remove)

export default router