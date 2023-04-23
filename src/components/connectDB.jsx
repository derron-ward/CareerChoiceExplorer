

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Human:Interface@careerchoice.s6wevrc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    return client.db('CareerChoice');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = client;
