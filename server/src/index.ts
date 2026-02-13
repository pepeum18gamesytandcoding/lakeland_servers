
import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Lakeland API running" });
});

app.use(express.static(path.join(__dirname, "../../client")));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
