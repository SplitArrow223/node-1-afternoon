const express = require('express')
const bodyParser = require('body-parser')
const mc = require('./controllers/message_controller')

const app = express()
app.use(bodyParser.json())
app.use(express.static('public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)


const PORT = 3001
app.listen(PORT, () => console.log(`listen linda on ${PORT}`))