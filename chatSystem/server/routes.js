import express from "express";
import loginController from "./controllers/loginController.js";
const router = express.Router();

router.post(`/api/auth`, loginController);

export default router;