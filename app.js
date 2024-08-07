import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes.js";
import blogRouter from './routes/blog-routes.js';

const app = express();

app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);


mongoose.connect(
    'mongodb+srv://atishayjain0808:%40UP32dr3231@cluster0.ss37m6j.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=>app.listen(5000))
.then(()=>console.log("Connected TO Database and Listening to localhost 5000")
)
.catch((err)=>console.log(err));


