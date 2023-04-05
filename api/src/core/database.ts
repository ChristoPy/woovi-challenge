import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string);

const db = mongoose.connection;

db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error')
  process.exit(1)
});
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

export default db;
