import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/', (_req, res, _next) => {
  res.send('hello')
})

app.listen(3000)
