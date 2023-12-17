const { MongoClient, ObjectID } = require('mongodb');
const dbConnect = require('./dbConnect');

// Connection URI
const uri = 'mongodb://localhost:27017/Recipes';  // Adjust the URI based on your MongoDB setup

// Database Name
const dbName = 'Recipes';

// Function to connect to the database
const connectToDatabase = async () => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

// Function to insert a document
const insertDocument = async (collectionName, document) => {
  const database = await connectToDatabase();
  const collection = database.collection(collectionName);
  const result = await collection.insertOne(document);
  console.log('Document inserted:', result.ops[0]);
};

// Function to find documents
const findDocuments = async (collectionName, query) => {
  const database = await connectToDatabase();
  const collection = database.collection(collectionName);
  const documents = await collection.find(query).toArray();
  console.log('Found documents:', documents);
};

// Function to update a document
const updateDocument = async (collectionName, query, update) => {
  const database = await connectToDatabase();
  const collection = database.collection(collectionName);
  const result = await collection.updateOne(query, { $set: update });
  console.log('Document updated:', result.modifiedCount);
};

// Function to delete a document
const deleteDocument = async (collectionName, query) => {
  const database = await connectToDatabase();
  const collection = database.collection(collectionName);
  const result = await collection.deleteOne(query);
  console.log('Document deleted:', result.deletedCount);
};

module.exports = {
  connectToDatabase,
  insertDocument,
  findDocuments,
  updateDocument,
  deleteDocument,
};
