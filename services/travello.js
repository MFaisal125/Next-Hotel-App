import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const travelloApi = createApi({
  reducerPath: "travelloApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  }),
  tagTypes: ["User", "Cart", "Rent", "Favorite", "Purchase", "Review"],
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
