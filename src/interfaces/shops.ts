export interface IShops {
  id?: number;
  pageTotal?: number;
  pageSize?: number;
  pageNumber?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  items?: IShopList[];
}

export interface IShopList {
  id?: number;
  pais?: string;
  titulo?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  endereco?: string;
  celular?: string;
  telefone?: string;
  estadoTitle?: string;
  categoriaId?: number;
}
