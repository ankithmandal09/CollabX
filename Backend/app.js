// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// require("dotenv").config();

// const connection = require("./config/db.js");
// const CollabXRouter = require("./routes/collabx.route.js");
// const UserRouter = require("./routes/user.route.js");
// const ProfileRouter = require("./routes/profile.route.js");
// const PostRouter = require("./routes/post.route.js");

// const PORT = process.env.PORT;

// const app = express();

// app.use(express.json());
// app.use(cors({
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
// }));

// app.use(helmet());

// app.get("/", (req, res) => {
//     res.status(200).json({message: "Healthy"});
// });

// app.use("/collabx", CollabXRouter);
// app.use("/users", UserRouter);
// app.use("/profiles", ProfileRouter);
// app.use("/posts", PostRouter);

// app.listen(PORT, async (err) => {
//     if(err){
//         console.error("Error connecting to the server.\n", err);
//     }
//     console.log("Successfully connected to the server.");
//     try {
//         await connection;
//         console.log("Successfully connected to the database.");
//     } catch (error) {
//         console.error("Error connecting to the databade.\n", error);   
//     }
// });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const connection = require("./config/db.js");
const CollabXRouter = require("./routes/collabx.route.js");
const UserRouter = require("./routes/user.route.js");
const ProfileRouter = require("./routes/profile.route.js");
const PostRouter = require("./routes/post.route.js");

const PORT = process.env.PORT;

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.options('*', cors());

app.use(helmet());

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Healthy" });
});

app.use("/collabx", CollabXRouter);
app.use("/users", UserRouter);
app.use("/profiles", ProfileRouter);
app.use("/posts", PostRouter);

app.listen(PORT, async (err) => {
    if (err) {
        console.error("Error connecting to the server.\n", err);
    }
    console.log("Successfully connected to the server.");
    try {
        await connection;
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.error("Error connecting to the database.\n", error);   
    }
});
