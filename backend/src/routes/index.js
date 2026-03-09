import express from "express";

const router = express.Router();

// Temporary test route
router.get("/health", (req, res) => {
  res.json({ message: "API is working" });
});

export default router;