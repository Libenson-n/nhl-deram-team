import express from "express";
import {
  getPlayerByTeam,
  getPlayerByPosition,
  getAllPlayers,
} from "../controllers/playerController.js";
import { validateTeam, validatePosition } from "../middleware/validator.js";

const router = express.Router();

router.get("/", getAllPlayers);
router.get("/team/:team", validateTeam, getPlayerByTeam);
router.get("/position/:position", validatePosition, getPlayerByPosition);

export { router as playerRoutes };
