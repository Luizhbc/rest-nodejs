const express = require("express");
const router = express.Router();

router.get("/posts");
router.get("/posts/:id");
router.post("/posts/:id");
router.put("/posts/:id");
router.delete("/posts/:id");



module.exports = router;