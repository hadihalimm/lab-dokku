import express from 'express'

const app = express()

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3100

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, HOST, () => {
    console.log(`App listening on ${HOST}:${PORT}`)
})