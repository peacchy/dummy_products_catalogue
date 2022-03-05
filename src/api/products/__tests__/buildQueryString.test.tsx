import { buildQueryString, Filters } from "../buildQueryString";

it("should build query string from object with string parameter", () => {
  const quesryString = buildQueryString({
    search: "value",
  });

  expect(quesryString).toMatch("?search=value");
});

it("should build query string from object with boolean parameter", () => {
  const quesryString = buildQueryString({
    active: true,
  });

  expect(quesryString).toMatch("?active=true");
});

it("should build query string from object with number parameter", () => {
  const quesryString = buildQueryString({
    page: 1,
  });

  expect(quesryString).toMatch("?page=1");
});

it("should build query string from object with many parameters", () => {
  const quesryString = buildQueryString({
    search: "value",
    active: true,
    promo: true,
    page: 1,
  });

  expect(quesryString).toMatch("?search=value&active=true&promo=true&page=1");
});

it("should return empty string for object without any parameters", () => {
  const quesryString = buildQueryString({});

  expect(quesryString).toMatch("");
});

it("should throw error for function paramter type other than object", () => {
  expect(() => buildQueryString(1)).toThrowError("");
});
