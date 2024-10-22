const { travelloApi } = require("../travello");

const rentApi = travelloApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new rent
    addRent: builder.mutation({
      query: (body) => ({
        url: "/rent/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: [
        "Rent",
        "User",
        "Cart",
        "Favorite",
        "Purchase",
        "Review",
      ],
    }),

    // get all rents
    getRents: builder.query({
      query: () => ({
        url: "/rent/",
        method: "GET",
      }),

      providesTags: ["Rent"],
    }),

    // get rent
    getRent: builder.query({
      query: (id) => ({
        url: `/rent/${id}`,
        method: "GET",
      }),

      providesTags: ["Rent"],
    }),

    // update rent
    updateRent: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rent/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: [
        "Rent",
        "User",
        "Cart",
        "Favorite",
        "Purchase",
        "Review",
      ],
    }),

    // delete rent
    deleteRent: builder.mutation({
      query: (id) => ({
        url: `/rent/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: [
        "Rent",
        "User",
        "Cart",
        "Favorite",
        "Purchase",
        "Review",
      ],
    }),

    // get filtered rents
    getFilteredRents: builder.mutation({
      query: (body) => ({
        url: "/rent/filter",
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["Rent"],
    }),
  }),
});

export const {
  useAddRentMutation,
  useGetRentsQuery,
  useGetRentQuery,
  useUpdateRentMutation,
  useDeleteRentMutation,
  useGetFilteredRentsMutation,
} = rentApi;
