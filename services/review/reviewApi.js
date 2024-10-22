const { travelloApi } = require("../travello");

const reviewApi = travelloApi.injectEndpoints({
  endpoints: (build) => ({
    // post a review
    addReview: build.mutation({
      query: (body) => ({
        url: "/review/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Review", "User", "Rent"],
    }),

    // get all reviews
    getAllReviews: build.query({
      query: () => ({
        url: "/review/",
        method: "GET",
      }),

      providesTags: ["Review", "User", "Rent"],
    }),

    // modify review
    modifyReview: build.mutation({
      query: ({ id, body }) => ({
        url: `/review/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Review", "User", "Rent"],
    }),

    // delete review
    deleteReview: build.mutation({
      query: (id) => ({
        url: `/review/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Review", "User", "Rent"],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetAllReviewsQuery,
  useModifyReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
