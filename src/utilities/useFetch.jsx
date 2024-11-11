import { useEffect, useState } from 'react';

function useFetch() {
  const [content, setContent] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch('./data/data.json');
      const data = await res.json();
      setContent(data);
    }

    fetchData();
  }, []);

  return { content };
}

export default useFetch;
