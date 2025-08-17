import mongoose from "mongoose";

let dbConnection; // 🔑 caching connection (important in serverless)

const dbConnect = async () => {
  try {
    if (!dbConnection) {
      dbConnection = await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.MONGO_DB_NAME,
      });
    }
    console.log(`MongoDB Connected: ${dbConnection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;