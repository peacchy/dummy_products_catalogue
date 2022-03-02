export const useFetch = () => {
  const httpGet = async <T>(url: string): Promise<T> => {
    return fetch(url).then((response) => response.json());
  };

  return {
    httpGet,
  };
};
