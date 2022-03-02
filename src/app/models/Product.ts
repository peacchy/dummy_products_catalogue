import { ProductDto } from "api/products/dto/ProductDto";

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

export const mapToProduct = (productDto: ProductDto): Product => ({
  id: productDto.id,
  name: productDto.name,
  description: productDto.description,
  promo: productDto.promo,
  rating: productDto.rating,
  image: productDto.image,
  active: productDto.active,
});
