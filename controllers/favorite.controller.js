import Favorite from "@/models/favorite.model";
import User from "@/models/user.model";

// add to favorite
export async function addToFavorite(req) {
  try {
    const favorite = await Favorite.findOne({ user: req.user._id });
    let result = {};

    if (favorite) {
      result = await Favorite.findOneAndUpdate(
        { user: req.user._id },
        {
          $push: { rents: req.body.rent },
        }
      );
    } else {
      result = await Favorite.create({
        user: req.user._id,
        rents: [req.body.rent],
      });

      await User.findByIdAndUpdate(req.user._id, {
        $set: {
          favorite: result._id,
        },
      });
    }

    if (result) {
      return {
        success: true,
        message: "Successfully added to favorite",
      };
    } else {
      return {
        success: false,
        message: "Failed to add to favorite",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// get favorite
export async function getFavorites() {
  try {
    const favorite = await Favorite.find().populate([
      "user",
      {
        path: "rents",
        populate: ["owner"],
      },
    ]);

    if (favorite) {
      return {
        success: true,
        message: "Successfully fetch favorites",
        data: favorite,
      };
    } else {
      return {
        success: false,
        message: "Failed to fetch favorites",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// delete from favorite
export async function removeFromFavorite(req) {
  try {
    const user = await User.findById(req.user._id);

    const result = await Favorite.findByIdAndUpdate(user.favorite, {
      $pull: {
        rents: req.query.id,
      },
    });

    if (result) {
      return {
        success: true,
        message: "Successfully deleted from favorite",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete from favorite",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
