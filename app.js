const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const postRoutes = require('./routes/posts');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/posts', postRoutes);


mongoose.connect(process.env.DB_URI)
  .then(app.listen(port))
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Posts RestAPI');
});

