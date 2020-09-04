import express from "express";
import {getAllUsers, getUserById, addNewUser} from "../requestHandlers/user.handlers.js";
import wrapper from "../middleware/wrapper.js";

const router  = express.Router();

router.get("/", wrapper(getAllUsers));
router.get("/:userId",wrapper(getUserById));
router.post("/", wrapper(addNewUser));

export default router;