const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')


app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(require('./config/checkToken'));
app.use(morgan('combined'))

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/games', ensureLoggedIn, require('./routes/api/games'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
app.use('/api/genres', ensureLoggedIn, require('./routes/api/genres'))

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app