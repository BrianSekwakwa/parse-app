import express from "express";
import { createPost } from "../controllers/PostController.js";

const postRouter = express.Router();

// Create a post
postRouter.post("/", createPost);

export default postRouter;
