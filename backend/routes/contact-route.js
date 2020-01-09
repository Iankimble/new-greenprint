const express = require("express");
const {} = require("../controllers/contact-controller");

const router = express.Router();

router.post("/addevent", addEvent);

module.exports = router;
