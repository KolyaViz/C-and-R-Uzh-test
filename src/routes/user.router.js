import express from "express";
import {getAllUsers, getUserById, addNewUser} from "../requestHandlers/user.handlers";

const router  = express.Router;

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/", addNewUser);

export default router;