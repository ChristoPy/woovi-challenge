import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017');

const db = mongoose.connection.useDb(process.env.MONGO_DB || 'lojja-test');

db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error')
  process.exit(1)
});

export default db;
