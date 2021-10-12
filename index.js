import express from "express";
import cors from "cors";
import Parse from "parse/node.js";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";

// Start the server
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("<h1>Parse Server App</h1>");
});

// Initialize Parse
const appId = process.env.appId;
const jsKey = process.env.javascriptKey;
const url = process.env.serverURL;
const msKey = process.env.masterKey;
// Port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  Parse.initialize(appId, jsKey, msKey);
  Parse.serverURL = url;
});
