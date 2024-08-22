import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://random-word-api.vercel.app/api'


export const api = axios.create({
    baseURL: BASE_URL
  });

  
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})