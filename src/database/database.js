require('dotenv').config();
import mongoose from "mongoose";

const url = process.env.MONGO_CONNECTION_URL;

mongoose.connect(url, {
    useUnifiedTopology: true   
});

const connection = mongoose.connection;

connection.once('open', () => {})