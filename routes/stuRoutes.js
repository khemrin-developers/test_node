import { Router } from "express";
import { home, about } from "../controllers/stuController.js"; // Note: standard ES modules often require the .js extension

const router = Router();

router.get("/", home);
router.get("/about", about);

export default router;