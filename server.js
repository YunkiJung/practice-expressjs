import express from "express";
import usersRoute from "./app/users/users.route.js";
import postsRoute from "./app/posts/posts.route.js";
import mongoose from "mongoose";

const app = express();

app.listen(3000);

mongoose.connect("mongodb://127.0.0.1/practice");
const db = mongoose.connection;
db.on('open', () => console.log('DB connection successed'));
db.on('error', () => console.log('DB connection error'));

app.use(express.json());


app.use('/', usersRoute);
app.use('/', postsRoute);