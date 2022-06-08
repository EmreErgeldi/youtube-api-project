import { useEffect, useState } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortContreoller = new AbortController();

    fetch(url, { signal: abortContreoller.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === "AbortError") {
          return;
        }else{
          setError(err.massage);
          setIsPending(false);
        }
      })
      return () => abortContreoller.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;