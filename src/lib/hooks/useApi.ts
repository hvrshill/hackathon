import { useState, useCallback } from 'react';
import { api, ApiResponse } from '../api';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export function useApi<T>({ onSuccess, onError }: UseApiOptions<T> = {}) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (
      method: keyof typeof api,
      url: string,
      payload?: any
    ): Promise<ApiResponse<T>> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api[method]<T>(url, payload);
        
        if (response.error) {
          setError(response.error);
          onError?.(response.error);
          return response;
        }

        setData(response.data);
        onSuccess?.(response.data);
        return response;
      } catch (err) {
        const errorMessage = 'An unexpected error occurred';
        setError(errorMessage);
        onError?.(errorMessage);
        return { data: {} as T, error: errorMessage };
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess, onError]
  );

  const get = useCallback(
    (url: string) => execute('get', url),
    [execute]
  );

  const post = useCallback(
    (url: string, payload?: any) => execute('post', url, payload),
    [execute]
  );

  const put = useCallback(
    (url: string, payload?: any) => execute('put', url, payload),
    [execute]
  );

  const del = useCallback(
    (url: string) => execute('delete', url),
    [execute]
  );

  return {
    data,
    error,
    isLoading,
    get,
    post,
    put,
    delete: del,
  };
} 