import express from "express";
import { pool } from "./db/conn.js";
import "dotenv/config";
import chalk from "chalk";

const app = express();
app.use(express.json());

const port: number = 3000;

app.get("/", async (req, res) => {
  const [data] = await pool.query("SELECT * FROM users");
  console.log(data)
  res.json(data);
});

app.listen(port, () => {
  console.log(chalk.green("Servidor conectado!"));
});
