const { travelloApi } = require("../travello");

const cartApi = travelloApi.injectEndpoints({
  endpoints: (builder) => ({
    // add to cart
    addToCart: builder.mutation({
      query: (body) => ({
        url: "/cart/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Cart", "User"],
    }),

    // get cart
    getCart: builder.query({
      query: () => ({
        url: "/cart/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Cart"],
    }),

    // remove from cart
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Cart", "User"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;
