// import modules
const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express(); // represents express application

// connect to datbase
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB CONNECTED"))
  .catch(err => console.log('DB CONNECTION ERROR', err));
// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// routes
const testRoutes = require("./routes/main-route");
app.use("/", testRoutes);

// port
const port = process.env.PORT || 8000;

//listener
const server = app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
});
