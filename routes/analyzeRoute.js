const express = require("express");
const router  = express.Router();

const analyzeResume = require("../Controllers/analyzeController");
router.post("/analyze", analyzeResume);

module.exports = router;