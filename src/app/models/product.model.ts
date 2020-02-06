export interface Product {
  id: string;
  createdAt: string;
  name: string;
  linie: string;
}

export interface Products {
  startIndex: number,
  totalResults: number,
  itemsPerPage: number,
  items?: Product[]
}