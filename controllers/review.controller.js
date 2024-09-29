import Rent from "@/models/rent.model";
import Review from "@/models/review.model";
import User from "@/models/user.model";

// add a review
export const addToReview = async (req) => {
  try {
    const review = await Review.create({
      ...req.body,
      reviewer: req.user._id,
    });

    if (review) {
      await User.findByIdAndUpdate(review.reviewer, {
        $push: {
          reviews: review._id,
        },
      });

      await Rent.findByIdAndUpdate(review.rent, {
        $push: {
          reviews: review._id,
        },
      });

      return {
        success: true,
        message: "Successfully added to review",
      };
    } else {
      return {
        success: false,
        message: "Failed to add to review",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// get reviews
export const getReviews = async () => {
  try {
    const reviews = await Review.find().populate(["reviewer", "rent"]);

    if (reviews) {
      return {
        success: true,
        message: "Successfully fetched reviews",
        data: reviews,
      };
    } else {
      return {
        success: false,
        message: "Failed to fetch reviews",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// modify review
export const modifyReview = async (req) => {
  try {
    const review = await Review.findByIdAndUpdate(req.query.id, {
      $set: req.body,
    });

    if (review) {
      return {
        success: true,
        message: "Successfully modified review",
      };
    } else {
      return {
        success: false,
        message: "Failed to modify review",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// remove from review
export const removeFromReview = async (req) => {
  try {
    const review = await Review.findByIdAndDelete(req.query.id);

    if (review) {
      await User.findByIdAndUpdate(review.reviewer, {
        $pull: {
          reviews: review._id,
        },
      });

      await Rent.findByIdAndUpdate(review.rent, {
        $pull: {
          reviews: review._id,
        },
      });

      return {
        success: true,
        message: "Successfully removed from review",
      };
    } else {
      return {
        success: false,
        message: "Failed to remove from review",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
