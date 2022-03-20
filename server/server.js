const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();

app.get('/api/chats', (req, res) => {
  res.send(chats)
})

app.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send("Server is Running.")
})

app.listen(process.env.PORT, console.log(`Server is running at port ${process.env.PORT}`))