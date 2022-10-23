export interface Usuario {
  nome?: string,
  username: string,
  email?: string,
  dataNasc?: Date | string,
  cidade?: {
    nome?: string,
    siglaUf?: string
  }
}
