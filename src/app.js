require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve)
app.use('/api-docs', swaggerUi.setup(swaggerDocument))

require('./Services/AuthService')(app)

require('./Services/CRUD/AccessService')(app)
require('./Services/CRUD/BuildingService')(app)
require('./Services/CRUD/ClimateSettingService')(app)
require('./Services/CRUD/DeviceService')(app)
require('./Services/CRUD/PresetService')(app)
require('./Services/CRUD/RoomService')(app)
require('./Services/CRUD/SensorService')(app)
require('./Services/CRUD/SensorDataService')(app)

// Logic goes here

module.exports = app
