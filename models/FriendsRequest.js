const mongoose = require("mongoose");

const { Schema } = mongoose;

const freindsRequestSchema = new Schema(
  {
    requestTo: { type: Schema.Types.ObjectId, ref: "UserModel" },
    requestFrom: { type: Schema.Types.ObjectId, ref: "UserModel" },
    requestStatus: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const FreindsRequest = mongoose.model(
  "FreindsRequest",
  freindsRequestSchema,
  "freindsRequest"
);

module.exports = FreindsRequest;
