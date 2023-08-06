const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonorListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes
//get donor list
router.get(
  "/donor-list",
  authMiddleware,
  adminMiddleware,
  getDonorListController
);

//get hospital list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

//get organisation list
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

//delete donor || get
router.delete(
  "/delete-donor/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonorController
);

module.exports = router;
