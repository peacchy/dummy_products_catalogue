export const useFetch = () => {
  const httpGet = async <T>(url: string): Promise<T> => {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          return response;
        }

        throw new Error(response);
      });
  };

  return {
    httpGet,
  };
};
