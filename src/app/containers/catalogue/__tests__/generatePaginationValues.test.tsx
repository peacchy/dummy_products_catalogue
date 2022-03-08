import { generatePaginationValues } from "../generatePaginationValues";

it.each([
  { totalPages: 1, expectedNumbers: [1] },
  { totalPages: 3, expectedNumbers: [1, 2, 3] },
  { totalPages: 6, expectedNumbers: [1, 2, 3, 4, 5, 6] },
])(
  "should generate array with all numbers for total page below 6",
  ({ totalPages, expectedNumbers }) => {
    const numbers = generatePaginationValues(totalPages, 1);

    expect(numbers).toEqual(expectedNumbers);
  }
);

it("should generate array with 1, 2, 3, ..., 5, 6, 7 for 7 total page and current page 1", () => {
  const numbers = generatePaginationValues(7, 1);

  expect(numbers).toEqual([1, 2, 3, "...", 5, 6, 7]);
});

it("should generate array with 2, 3, 4, 5, 6, 7 for 7 total page and current page 3", () => {
  const numbers = generatePaginationValues(7, 3);

  expect(numbers).toEqual([2, 3, 4, 5, 6, 7]);
});

it("should generate array with 3, 4, 5, 6, 7 for 7 total page and current page 4", () => {
  const numbers = generatePaginationValues(7, 4);

  expect(numbers).toEqual([3, 4, 5, 6, 7]);
});

it("should generate array with 4, 5, 6, 7 for 7 total page and current page 5", () => {
  const numbers = generatePaginationValues(7, 5);

  expect(numbers).toEqual([4, 5, 6, 7]);
});

it.each([
  { totalPages: 7, currentPage: 6 },
  { totalPages: 7, currentPage: 7 },
])(
  "should generate array with 5, 6, 7 for 7 total page and current page equal or greater than 6",
  ({ totalPages, currentPage }) => {
    const numbers = generatePaginationValues(totalPages, currentPage);

    expect(numbers).toEqual([5, 6, 7]);
  }
);
