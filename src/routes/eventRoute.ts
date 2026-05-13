import express from "express";
import { getEvent, createEvent } from "../controllers/eventConroller";

const router = express.Router();

router.get("/:id", getEvent);
router.post("/", createEvent);

export default router;
