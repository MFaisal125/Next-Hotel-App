import { Schema, models, model } from "mongoose";
import connectDB from "@/libs/db";

connectDB();

const favoriteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    rents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Rent",
      },
    ],

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

const Favorite = models.Favorite || model("Favorite", favoriteSchema);

export default Favorite;
