const express = require("express");
const { getCheckoutUrl } = require("../controller/payment.controller");
const router = express.Router();

router.post("/checkout", getCheckoutUrl);

module.exports = router;
