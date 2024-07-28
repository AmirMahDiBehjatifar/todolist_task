const { default: mongoose, mongo } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const DB_URI = process.env.DB_URI
const DB_URI = "mongodb://localhost:27017/todolist-ejs";
mongoose.set('strictQuery', true);

async function connectToDb() {
    try {
        await mongoose.connect(DB_URI)
        console.log("connected to mongodb.");
    } catch {
        console.log("failed to connect...");
    }
}

connectToDb();