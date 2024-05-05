import mongoose, { Connection } from 'mongoose';

let isConnected: Connection | boolean = false;

const connectDb = async () => {
    if (isConnected) {
        console.log("db already connected");
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URI!)
        isConnected = res.connection;
        console.log('db connected');
        return isConnected;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default connectDb;