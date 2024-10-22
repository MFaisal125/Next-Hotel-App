const { travelloApi } = require("../travello");

const paymentApi = travelloApi.injectEndpoints({
  endpoints: (build) => ({
    // create payment intent
    createPaymentIntent: build.mutation({
      query: (body) => ({
        url: "/payment/create-intent",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Rent", "User"],
    }),

    // modify purchase status
    modifyPurchaseStatus: build.mutation({
      query: ({ id, body }) => ({
        url: `/purchase/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Rent", "User"],
    }),

    // get purchases
    getPurchases: build.query({
      query: () => ({
        url: "/purchase/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Rent", "User"],
    }),

    // delete purchase
    removeFromPurchase: build.mutation({
      query: (id) => ({
        url: `/purchase/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Rent", "User"],
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useModifyPurchaseStatusMutation,
  useGetPurchasesQuery,
  useRemoveFromPurchaseMutation,
} = paymentApi;
