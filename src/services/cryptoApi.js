import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "a1501c5397msh96e6b572133f1dap1e6422jsne2ee4ea61ac1"
      );
      headers.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit = 10) => `/coins?limit=${limit}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId = 10) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
