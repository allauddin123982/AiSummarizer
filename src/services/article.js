//one specific part of our state of a global state
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const rapidApiKey = import.meta.env.VITE_RAPID__API_ARTICLE_KEY;
export const articleApi = createApi({
  reducerPath: "articleApi", // reducer path
  baseQuery: fetchBaseQuery({
    baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key', rapidApiKey)
        headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
        return headers;
    }
  }),
  endpoints: (builder) => ({    // builder allows us to build those endpoints
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const {useLazyGetSummaryQuery} = articleApi; //fire this hook on demand not on when App load