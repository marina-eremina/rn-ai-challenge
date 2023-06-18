import { useCallback, useEffect, useState } from 'react';

const API_DOMAIN =
  'https://us-central1-temporary-692af.cloudfunctions.net/';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_DOMAIN}${endpoint}`);
      const responseData = await response.json();
      setData(responseData);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [endpoint, fetchData]);

  return { data, error, isLoading };
};

export default useFetch;
