require('dotenv').config();
const express = require('express');
const app = express();

const { PORT, MONGO_URI } = process.env;

const mongoose = require('mongoose');
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World 하이욤'));

const port = PORT || 7000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
