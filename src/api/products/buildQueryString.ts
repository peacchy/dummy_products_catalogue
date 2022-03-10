export const buildQueryString = <T>(value: T): string => {
  if (typeof value !== "object") {
    throw new Error("");
  }

  const entries = Object.entries(value).filter(
    ([key, value]) => value !== undefined
  );

  if (entries.length === 0) return "";

  const queryString = entries
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `?${queryString}`;
};
