import express from 'express'
import listAll from '../controllers/user/listAll'
import getOne from '../controllers/user/getOne'
import create from '../controllers/user/create'
import update from '../controllers/user/update'
import remove from '../controllers/user/remove'

const router = express.Router()

router.get('/', listAll)

router.get ('/:id', getOne)

router.post ('/', create)

router.put('/', update)

router.delete('/:id', remove)

export default router