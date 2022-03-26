import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] =  useState(null);
  const [pending, setPending] = useState(false);

  const execute = useCallback(async (executeUrl) => {
    setPending(true);

    try {
      const json = await fetch(executeUrl ?? url, options).then((res) =>
        res.json()
      );

      setResponse(json);
    } catch (error) {
      setError(error);
    }

    setPending(false);
  }, [options, url]);

  useEffect(() => {
    if (!options?.lazy) {
      execute();
    }
  }, [execute, options?.lazy]);

  return {
    response, error, pending, execute
  }
}
