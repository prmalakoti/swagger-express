const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const dotenv = require('dotenv');
dotenv.config();

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.PORT, () => {
    console.log(`Server is running!\nAPI documentation: http://localhost:${process.env.PORT}/doc`)
})

/* Endpoints */
require('./src/routes/product')(app)
require('./src/routes/sample')(app)