const userModel = require("../models/userModel");

//get donor list
const getDonorListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "Donor" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: donorData.length,
      message: "Donor List Fetched Successfully",
      donorData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor List API",
      error,
    });
  }
};

//get hospital list
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "Hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: hospitalData.length,
      message: "Hospital List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital List API",
      error,
    });
  }
};

//get org list
const getOrgListController = async (req, res) => {
  try {
    const OrgData = await userModel
      .find({ role: "Organisation" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: OrgData.length,
      message: "Organisation List Fetched Successfully",
      OrgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Organisation List API",
      error,
    });
  }
};

//delete donor
const deleteDonorController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Record Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while Deleting",
      error,
    });
  }
};

module.exports = {
  getDonorListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
};
