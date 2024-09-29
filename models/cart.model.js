import { Schema, models, model } from "mongoose";
import connectDB from "@/libs/db";

connectDB();

const cartSchema = new Schema(
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

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
