export const generatePaginationValues = (
  totalPages: number,
  currentPage: number
): (number | "...")[] => {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, item) => item + 1);
  }

  if (currentPage === totalPages) {
    return [totalPages - 2, totalPages - 1, totalPages];
  }

  if (currentPage === 1) {
    return [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      "...",
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  if (totalPages - currentPage >= 5) {
    return [
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return Array.from(
    new Set([
      currentPage - 1,
      currentPage,
      currentPage + 1,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ])
  );
};
