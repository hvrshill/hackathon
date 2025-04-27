import axios from './axios';

export type ApiResponse<T> = {
  data: T;
  error?: string;
};

export const api = {
  get: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.get<T>(url);
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: {} as T,
          error: error.response?.data?.message || error.message
        };
      }
      return { data: {} as T, error: 'An unexpected error occurred' };
    }
  },

  post: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.post<T>(url, data);
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: {} as T,
          error: error.response?.data?.message || error.message
        };
      }
      return { data: {} as T, error: 'An unexpected error occurred' };
    }
  },

  put: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.put<T>(url, data);
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: {} as T,
          error: error.response?.data?.message || error.message
        };
      }
      return { data: {} as T, error: 'An unexpected error occurred' };
    }
  },

  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.delete<T>(url);
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          data: {} as T,
          error: error.response?.data?.message || error.message
        };
      }
      return { data: {} as T, error: 'An unexpected error occurred' };
    }
  },
}; 