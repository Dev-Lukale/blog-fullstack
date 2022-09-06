import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import postsRoute from "./routes/posts.js"
import categoriesRoute from "./routes/categories.js"
import multer from "multer";

const app = express()

dotenv.config();

const connect = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        throw (error)
    }

};

mongoose.connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
})
mongoose.connection.on("connected", () => {
    console.log("Mongodb connected");
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage }); 
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File upoladed"); 
});

//middlewares
app.use(express.json());


app.use("/api/auth", authRoute); 
app.use("/api/users", usersRoute); 
app.use("/api/posts", postsRoute); 
app.use("/api/categories", categoriesRoute); 

app.listen("8800", () => {
    connect(); 
    console.log("Server running");
})