

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "process.env.MONGODB_URI";
const DB_NAME = 'db';

let cachedDb = null;
const connectToDatabase = async (uri) => {
  
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(DB_NAME);
  return cachedDb;
};

const queryDatabase = async (db) => {
  const todos = await db.collection("todos").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todos),
  };
};

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);
  return queryDatabase(db);
};