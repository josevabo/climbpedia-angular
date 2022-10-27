export interface Usuario {
  nome?: string,
  username: string,
  email?: string,
  dataNasc?: Date | string,
  senha: string,
  cidade?: {
    nome?: string,
    siglaUf?: string
  }
}
