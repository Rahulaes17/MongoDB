const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mySchool';

let db, collection;

async function main() {
  try {
    // Connect once when server starts
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    collection = db.collection('students');

    // Define routes
    app.get('/', async (req, res) => {
      try {
        const studentsData = await collection.find().toArray();
        res.json(studentsData); // send data as JSON
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching students');
      }
    });

    // Start server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

main();