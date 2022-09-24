import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6434d7003emshd1d007b9f028de2p12c3fejsn5c7b3e27b9f2",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "6434d7003emshd1d007b9f028de2p12c3fejsn5c7b3e27b9f2"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (genre) => "charts/world",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
