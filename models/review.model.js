import { Schema, models, model } from "mongoose";
import connectDB from "@/libs/db";

connectDB();

const reviewSchema = new Schema(
  {
    reviewer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    rent: {
      type: Schema.Types.ObjectId,
      ref: "Rent",
    },

    comment: {
      type: String,
      required: [true, "Please enter your comment"],
      maxLength: [500, "Comment cannot be more than 500 characters"],
    },

    rating: {
      type: Number,
      required: [true, "Please enter your rating"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Review = models.Review || model("Review", reviewSchema);

export default Review;
