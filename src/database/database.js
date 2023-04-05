import mongoose from "mongoose";

// const url = `${process.env.MONGO_CONNECTION_URL}/${process.env.DATA_BASE_NAME}`;
const url = 'mongodb+srv://nicolasgaliam:nico12345@cluster0.7hzvgkb.mongodb.net/coder-coffe'
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    
})