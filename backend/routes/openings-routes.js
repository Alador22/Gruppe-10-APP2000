const express = require("express");
const { check } = require("express-validator");

const openingsController = require("../controllers/openings-controllers");

const router = express.Router();

// Get all openings
router.get("/", openingsController.getOpenings);

// Create a new opening
router.post(
  "/save",
  [
    check("name").not().isEmpty(),
    check("moves").not().isEmpty(),
    check("description").not().isEmpty().isLength({ min: 10 }),
  ],
  openingsController.createOpening
);
// Update an existing opening by its _id
router.patch(
  "/:oid",
  [
    check("name").not().isEmpty(),
    check("moves").not().isEmpty(),
    check("description").not().isEmpty(),
  ],
  openingsController.updateOpening
);
module.exports = router;