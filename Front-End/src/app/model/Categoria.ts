import { Produto } from "./Produto";

export class Categoria{
   public id: number
   public genero: string
   public assunto: string
   public nacionalidade: string
   public produto: Produto[]
}