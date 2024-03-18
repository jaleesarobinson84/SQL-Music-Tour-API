// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// DATABASE
const { sequelize } = require('./models')
// const sequelize = new Sequelize(process.env.DB_Connection)
const testSequelize = async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    testSequelize()
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})