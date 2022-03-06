export interface ProductsRequestDto {
  search?: string;
  active?: true;
  promo?: true;
  page: number;
  limit: number;
}
