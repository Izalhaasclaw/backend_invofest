import express from "express";
import { createPembicara, getPembicara } from "../controllers/pembicaraController";

const router = express.Router();

router.get("/:id", getPembicara);
router.post("/", createPembicara);

export default router;
