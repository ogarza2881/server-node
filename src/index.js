import './helpers/dotenv'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import logger from './helpers/logger'
import router from './routes'
import { notFound, errorHandler } from './helpers/errors'

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: process.env.ORIGIN }))
app.use(helmet())

app.use(router)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
  logger.success(`Application started at http://localhost:${port}`),
)
