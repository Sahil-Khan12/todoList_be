import mongoose from "mongoose";
const dbURI = 'mongodb://127.0.0.1:27017/todos';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectDB;