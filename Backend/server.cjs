const express = require('express');
const colors = require('colors')
const dotenv  = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware.cjs')
const connectDB = require('./config/db.cjs')
const port = process.env.PORT || 5000;

connectDB()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

app.use('/api/GetCardData', require('./routes/CardDataRoutes.cjs'));

app.listen(port, () => console.log(`Server started on port ${port}`));
