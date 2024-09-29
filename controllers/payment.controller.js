import Purchase from "@/models/purchase.model";
import Rent from "@/models/rent.model";
import User from "@/models/user.model";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(req) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.price * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const purchase = await Purchase.create({
      rent: req.body.rent,
      price: req.body.price,
      members: req.body.members,
      duration: req.body.duration,
      user: req.user._id,
    });

    if (purchase && paymentIntent) {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          purchases: purchase._id,
        },
      });

      await Rent.findByIdAndUpdate(req.body.rent, {
        $push: {
          users: req.user._id,
        },
      });

      return {
        success: true,
        message: "Payment intent created successfully",
        clientSecret: paymentIntent.client_secret,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
