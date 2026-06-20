import mongoose from "mongoose";
import dns from "dns";

// change dns
dns.setServers(["1.1.1.1", "8.8.8.8"])

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
}

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("✅ Database connected successfully");
        
    } catch (error) {
        console.log("❌ Database connection error:");
        console.log(error.message);
    }
}

export default connectDB;