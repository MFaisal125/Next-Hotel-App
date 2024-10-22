const { travelloApi } = require("../travello");

const favoriteApi = travelloApi.injectEndpoints({
  endpoints: (builder) => ({
    // add to favorite
    addToFavorite: builder.mutation({
      query: (body) => ({
        url: "/favorite/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Favorite", "User"],
    }),

    // get favorites list
    getFavorites: builder.query({
      query: () => ({
        url: "/favorite/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Favorite"],
    }),

    // delete from favorites
    deleteFromFavorite: builder.mutation({
      query: (id) => ({
        url: `/favorite/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Favorite", "User"],
    }),
  }),
});

export const {
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
  useDeleteFromFavoriteMutation,
} = favoriteApi;
