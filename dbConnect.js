const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/Recipes';  // Adjust the URI based on your MongoDB setup

// Database Name
const dbName = 'Recipes';

// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Export the connection function for external use
module.exports = async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to the database');

    // Specify the database
    const database = client.db(dbName);

    return database;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

// If you want to close the connection when it's no longer needed
module.exports.closeConnection = async function closeConnection() {
  await client.close();
  console.log('Connection closed');
};
