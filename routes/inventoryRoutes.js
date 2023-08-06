const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonorsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// add inventory \\ post
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//get recent blood records
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get donor records
router.get("/get-donors", authMiddleware, getDonorsController);

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get organisation records
router.get("/get-organisation", authMiddleware, getOrganisationController);

//get organisation records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
