import { Telefone } from "./Telefone";

export interface Pessoa {
    id: number;
    nome: string;
    telefone: Telefone[];
}