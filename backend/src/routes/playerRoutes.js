import express from "express";
import {
  getPlayerByTeam,
  getPlayerByPosition,
  getAllPlayers,
} from "../controllers/playerController.js";

const router = express.Router();

router.get("/", getAllPlayers);
router.get("/team/:team", getPlayerByTeam);
router.get("/position/:position", getPlayerByPosition);

export { router as playerRoutes };
