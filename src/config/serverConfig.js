const dontenv = require('dotenv');

dontenv.config();

module.export={
        PORT:process.env.PORT,
        FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH
}