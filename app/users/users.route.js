import { Router } from "express";
import { createUser, getAllUsers } from "./users.controller.js";

const router = Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);


export default router;