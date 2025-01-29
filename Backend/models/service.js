const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    enum: [
      "Technology Needs Assessment",
      "Technology Transfer & Commercialization",
      "Technology Consultancy",
      "Project Proposal Preparation",
      "Packaging and Labeling",
      "Techonology Training",
      "Technology Clinics/Forum",
      "Scholarship",
      "Laboratory (Metrology/Microbiology)",
      "Library/Information",
      "Others",
    ],
    required: true,
  },
  otherService: {
    type: String,
    required: function () {
      return this.service === "Others";
    },
    default: null,
  },
  subService: {
    type: String,
    enum: function () {
      if (this.service === "Technology Transfer & Commercialization") {
        return [
          "Food Processing",
          "Gifts, Housewares, Decors",
          "Agriculture/ Horticulture",
          "Aquaculture/Marine",
          "Furniture",
          "Metals & Engineering",
          "Health and Pharma.",
          "ICT",
          "Others",
        ];
      } else if (this.service === "Technology Consultancy") {
        return ["MPEX", "CAPE", "CPT", "Energy Audit", "Others"];
      } else if (this.service === "Others") {
        return ["Others"];
      }
      return [];
    },
    required: function () {
      return (
        this.service === "Technology Consultancy" ||
        this.service === "Technology Transfer & Commercialization" ||
        this.service === "Others"
      );
    },
    default: null,
  },
  otherSubService: {
    type: String,
    required: function () {
      return this.subService === "Others";
    },
    default: null,
  },
  howDidYouKnow: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Services", servicesSchema);
