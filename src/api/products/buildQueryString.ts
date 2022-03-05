export interface Filters {
  search?: string;
  active?: true;
  promo?: true;
}

// export const buildQueryString = (filters: Filters): string => {
//   const entries = Object.entries(filters);

//   if (entries.length === 0) return "";

//   const queryString = entries
//     .map(([key, value]) => `${key}=${value}`)
//     .join("&");

//   return `?${queryString}`;
// };

export const buildQueryString = <T>(value: T): string => {
  if (typeof value !== "object") {
    throw new Error("");
  }

  const entries = Object.entries(value);

  if (entries.length === 0) return "";

  const queryString = entries
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `?${queryString}`;
};

// buildQueryString2<{ id: string }>({ id: "asd" });
// buildQueryString2({ value: "asd" });
// buildQueryString2({ value: "asd" });
// buildQueryString2(1);
