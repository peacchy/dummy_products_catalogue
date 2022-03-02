import { PaginateLinksDto } from "./PaginateLinksDto";
import { PaginateMetaDto } from "./PaginateMetaDto";
import { ProductDto } from "./ProductDto";

export interface ProductResponseDto {
  items: ProductDto[];
  meta: PaginateMetaDto;
  links: PaginateLinksDto;
}
