const express = require("express");
const router = express.Router();
const {
  submitCustomerFeedback,
  fetchHistory,
  deleteAllFeedback,
} = require("../controllers/customerFeedback");

router.get("/get-history", fetchHistory);


module.exports = router;
