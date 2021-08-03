import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const isMount = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMount.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMount.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);
  return state;
};
