import Purchase from "@/models/purchase.model";
import Rent from "@/models/rent.model";
import User from "@/models/user.model";

// get purchase
export async function getPurchases() {
  try {
    const purchase = await Purchase.find().populate([
      "user",
      {
        path: "rent",
        populate: ["owner"],
      },
    ]);

    if (purchase) {
      return {
        success: true,
        message: "Successfully fetch purchases",
        data: purchase,
      };
    } else {
      return {
        success: false,
        message: "Failed to fetch purchases",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// modify purchase status
export async function modifyPurchaseStatus(req) {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.query.id, {
      status: req.body.status,
    });

    if (purchase) {
      return {
        success: true,
        message: "Successfully modified purchase status",
      };
    } else {
      return {
        success: false,
        message: "Failed to modify purchase status",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// delete purchase
export async function removeFromPurchase(req) {
  try {
    const purchase = await Purchase.findByIdAndDelete(req.query.id);

    if (purchase) {
      await User.findByIdAndUpdate(purchase.user, {
        $pull: {
          purchases: purchase._id,
        },
      });

      await Rent.findByIdAndUpdate(purchase.rent, {
        $pull: {
          users: purchase.user,
        },
      });

      return {
        success: true,
        message: "Successfully deleted purchase",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete purchase",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
