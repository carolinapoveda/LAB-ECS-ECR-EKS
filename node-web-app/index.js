const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const url = 'mongodb://lab_database:27017';
const port = 3000
const home = {
  message: 'Estoy conectado a la base de datos MongoDB',
  greeting: 'Hello Docker Unir',
}

// View engine setup
app.set('view engine', 'ejs');

// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
  if(err){
    throw new Error('Could not connect to the database');
  }
  app.get('/', (req, res) => {
    res.render('home', {
      home: home
    })
  })
  console.log('Successfully connected to the database');
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})