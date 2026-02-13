const express = require("express");
const router = express.Router();
const controller = require("../controller/saleController");

router.post("/", controller.createSale);
router.get("/", controller.getSales);

module.exports = router;
