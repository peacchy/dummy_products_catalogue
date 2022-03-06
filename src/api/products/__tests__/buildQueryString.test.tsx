import { buildQueryString } from "../buildQueryString";

it("should build query string from object with string parameter", () => {
  const queryString = buildQueryString({
    search: "value",
  });

  expect(queryString).toEqual("?search=value");
});

it("should build query string from object with boolean parameter", () => {
  const queryString = buildQueryString({
    active: true,
  });

  expect(queryString).toEqual("?active=true");
});

it("should build query string from object with number parameter", () => {
  const queryString = buildQueryString({
    page: 1,
  });

  expect(queryString).toEqual("?page=1");
});

it("should build query string from object with many parameters", () => {
  const queryString = buildQueryString({
    search: "value",
    active: true,
    promo: true,
    page: 1,
  });

  expect(queryString).toEqual("?search=value&active=true&promo=true&page=1");
});

it("should return empty string for object without any parameters", () => {
  const queryString = buildQueryString({});

  expect(queryString).toEqual("");
});

it("should throw error for function paramter type other than object", () => {
  expect(() => buildQueryString(1)).toThrowError("");
});

it("should return query sting without parameters set to undefined", () => {
  const queryString = buildQueryString({
    search: "value",
    active: undefined,
    promo: undefined,
    page: 1,
  });

  expect(queryString).toEqual("?search=value&page=1");
});

it("should return empty string for object with parameters set to undefined", () => {
  const queryString = buildQueryString({
    active: undefined,
    promo: undefined,
  });

  expect(queryString).toEqual("");
});
