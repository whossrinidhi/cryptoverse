import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://google-news13.p.rapidapi.com";
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "a1501c5397msh96e6b572133f1dap1e6422jsne2ee4ea61ac1"
      );
      headers.set("x-rapidapi-host", "google-news13.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/search?keyword=cryptocurrency&lr=en-US ",
    }),
  }),
});
export const { useGetNewsQuery } = newsApi;
