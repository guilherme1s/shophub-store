import { useState, useEffect } from "react";
import { getAddressByCep } from "../api/cep";

interface UseCepResult {
  address: {
    adress: string;
    city: string;
    state: string;
    complement: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export function useCep(cep: string): UseCepResult {
  const [address, setAddress] = useState<UseCepResult["address"]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!cep || cep.length !== 8) return;

    setLoading(true);
    setError(null);

    getAddressByCep(cep)
      .then((data) => {
        setAddress({
          adress: data.logradouro || "",
          city: data.localidade || "",
          state: data.uf || "",
          complement: data.complemento || "",
        });
      })
      .catch((error) => {
        setError(error.message);
        setAddress(null);
      })
      .finally(() => setLoading(false));
  }, [cep]);

  return { address, loading, error };
}
