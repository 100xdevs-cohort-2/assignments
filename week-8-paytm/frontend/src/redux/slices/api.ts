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
      invalidatesTags: ["myBalance"],
    }),
    signup: builder.mutation<
      {
        username: string;
        balance: number;
      },
      { firstName: string; lastName: string; email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body: body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["myBalance"],
    }),
    getAllUsers: builder.query<UsersResponse, string>({
      query: (filterText) =>
        `http://localhost:4000/api/v1/user/bulk?user=${filterText}`,
    }),
    fetchBalance: builder.query<{ balance: number }, void>({
      query: () => "/account/balance",
      providesTags: ["myBalance"],
    }),
    sendMoney: builder.mutation<void, { toAccountId: string; amount: number }>({
      query: (body) => ({
        url: "/account/transfer",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["myBalance"],
    }),
  }),
});

export const {
  useLoginMutation,
  useFetchBalanceQuery,
  useLogoutMutation,
  useSignupMutation,
  useGetAllUsersQuery,
  useSendMoneyMutation,
} = api;
