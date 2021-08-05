import { useEffect, useState } from 'react';

const useFetch = (url: string, initial: any[] | null) => {
  const [response, setResponse] = useState(initial);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return response;
};

export default useFetch;
