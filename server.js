const express = require("express");
const cors = require("cors");
const app = express();

const analyzeRoute = require("./routes/analyzeRoute");
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("AI Resume Analyzer API is running...");
});
app.use("/",analyzeRoute);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})