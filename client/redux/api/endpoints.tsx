import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from 'next-runtime-env';

export const endpointsApi = createApi({
  reducerPath: 'endpointsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
        query: ({name, email, password}) => ({
            url: '/api/auth/register',
            method: 'POST',
            body:{
                name, 
                email, 
                password,
            }
        }),
    }),

    userLogin: builder.mutation({
        query: ({email, password}) => ({
            url: '/api/auth/login',
            method: 'POST',
            body:{
                email, 
                password,
            }
        }),
    }),
  }),
});

export const {
    useUserRegistrationMutation,
    useUserLoginMutation,
} = endpointsApi;
