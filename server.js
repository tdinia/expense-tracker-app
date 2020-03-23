const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Config
dotenv.config({ path: './config/config.env' });
connectDB();

// App
const app = express();
app.use(express.json());

const transactions = require('./routes/transactions');

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server started on ${process.env.NODE_ENV} mode on port: ${PORT}`.black
      .bgYellow
  )
);
