const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'mySchool';

let db;
let collection;

app.use(express.json());

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  collection = db.collection('students');
  console.log('MongoDB connected');
}

app.get('/', async (req, res) => {
  try {
    const students = await collection.find().toArray();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching students' });
  }
});

app.post('/students', async (req, res) => {
  try {
    const newStudent = req.body;
    const result = await collection.insertOne(newStudent);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding student' });
  }
});

app.put('/students/:id', async (req, res) => {
  try {
    const { ObjectId } = require('mongodb');
    const id = req.params.id;
    const updatedData = req.body;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating student' });
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    const { ObjectId } = require('mongodb');
    const id = req.params.id;

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting student' });
  }
});

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Server startup failed', error);
    process.exit(1);
  }
}

startServer();
