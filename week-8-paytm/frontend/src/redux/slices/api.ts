import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["myBalance"],
  endpoints: (builder) => ({
    login: builder.mutation<
      {
        username: string;
        balance: number;
      },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body: body,
      }),
    }),
    fetchBalance: builder.query<{ balance: number }, void>({
      query: () => "/account/balance",
      providesTags: ["myBalance"],
    }),
  }),
});

export const { useLoginMutation, useFetchBalanceQuery } = api;
