export interface RetornoPaginado<T> {
  count: number;
  numberOfPages: number;
  resultados: T[];
}
