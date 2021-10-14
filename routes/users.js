import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/UserController.js";

const userRouter = express.Router();

// Posts Routes
// -- Get all Posts
userRouter.get("/", getAllUsers);
// -- Get a post by id
userRouter.get("/:id", getUserById);
// -- Create a post
userRouter.post("/", createUser);
// -- Edit post by id
userRouter.put("/:id", updateUser);
// -- Delete a post by id
userRouter.delete("/:id", deleteUser);

export default userRouter;
