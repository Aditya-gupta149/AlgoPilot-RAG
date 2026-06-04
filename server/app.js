const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("AlgoPilot Backend Running");
});

const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});