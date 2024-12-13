import express from "express";
import cors from "cors";
import "dotenv/config";
import { playerRoutes } from "./routes/playerRoutes.js";

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

app.use("/api/player", playerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
