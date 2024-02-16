//const express = require('express')
import express from "express"
import {PORT, HOST} from './config.js'
//import FRUTAS from './config.js'
//import { var1, var2 } from "./config.js"
import userRoute from './routers/userRouter'
import productRoute from './routers/productRouter'
import logger from "./middleware/logger.js"

const app = express()

//app.use('/user', logger)
app.use(express.json())

//console.log(var1, var2,  FRUTAS.var3, FRUTAS.var4);

app.use('/user', userRouter)
  
app.listen(PORT, () => {
  console.log(`Server running on ${HOST} ${PORT}`)
})

app.use('/product', productRouter)
  
app.listen(PORT, () => {
  console.log(`Server running on ${HOST} ${PORT}`)
})
