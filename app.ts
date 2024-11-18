import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { notFoundHandler, errorHandler } from './src/middleware/error_handler'
import { prisma } from './src/config/prisma'
// Routes





const app: Application = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get("/excel", async (req, res) => {
    const file = `${__dirname}/assets/Video_Games.csv`
    console.log(file)
    console.log("test...")
    return res.download(file)

})


export default app