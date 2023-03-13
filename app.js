const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const PORT = 3000

// middleware
app.use(express.json())

app.use('/app/v1/tasks', tasks)

app.listen(PORT, console.log(`server is listening on port ${PORT}`))
