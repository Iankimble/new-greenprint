const express = require("express");
const {
  addEvent,
  updateEvent,
  deleteEvent,
  allEvents
} = require("../controllers/event-controller");

const router = express.Router();

router.get("/events", allEvents);

router.post("/addevent", addEvent);

router.put("/eventupdate", updateEvent);

router.delete("/eventdelete", deleteEvent);

module.exports = router;
