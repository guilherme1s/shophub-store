import type { Cep } from "../types/cep";

const baseUrl = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string): Promise<Cep> {
  const response = await fetch(`${baseUrl}/${cep}/json/`);

  if (!response.ok) {
    throw new Error("Erro ao buscar CEP");
  }

  const data = await response.json();

  if (data.erro) {
    throw new Error("CEP não encontrado");
  }

  return data;
}
