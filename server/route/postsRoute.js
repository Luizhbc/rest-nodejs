const express = require("express");
const router = express.Router();

router.get("/posts", async function (req, res){
    res.json([{    }]);
});
router.get("/posts/:id", async function (req, res){

});
router.post("/posts/:id", async function (req, res){

});
router.put("/posts/:id", async function (req, res){

});
router.delete("/posts/:id", async function (req, res){

});



module.exports = router;