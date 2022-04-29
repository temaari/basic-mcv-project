const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

const usersRouter = require('./routes/users')

app.use('/user', usersRouter)

app.listen(process.env.PORT || 3000)