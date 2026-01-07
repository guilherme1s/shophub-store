import { useForm } from "react-hook-form";
import { StepTitle } from "../../../Components/StepTitle";
import { useEffect } from "react";
import { useCep } from "../../../hooks/useCep";
import type { ShippingData } from "../../../types/shippingData";

interface ShippingDataFormProps {
  onValidityChange: (isValid: boolean) => void;
  submitForm: (data: ShippingData) => void;
}

export function ShippingDataForm({
  submitForm,
  onValidityChange,
}: ShippingDataFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<ShippingData>({
    mode: "onBlur",
  });

  const cep = watch("cep");
  const { address, loading, error } = useCep(cep);

  useEffect(() => {
    if (!address) return;

    clearErrors("cep");

    onValidityChange(isValid);
    setValue("adress", address.adress);
    setValue("city", address.city);
    setValue("state", address.state);
    setValue("complement", address.complement);
  }, [address, setValue, clearErrors, isValid, onValidityChange]);

  useEffect(() => {
    if (!error) return;

    setError("cep", {
      type: "manual",
      message: error,
    });
  }, [error, setError]);

  const inputBase =
    "bg-white w-full p-4 rounded-lg border-2 focus:outline-none";
  const inputOk = "border-white focus:border-primary";
  const inputError = "border-red-500 focus:border-red-500";

  return (
    <form
      id="shippingForm"
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col gap-6"
    >
      <div className="bg-gray p-8 rounded-xl">
        <StepTitle step={1} title="Informações de entrega" />

        <div className="flex flex-col gap-6 mt-10">
          <div>
            <input
              className={`${inputBase} ${errors.name ? inputError : inputOk}`}
              placeholder="Nome completo*"
              {...register("name", {
                required: "Nome é obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="email*"
              className={`${inputBase} ${errors.email ? inputError : inputOk}`}
              placeholder="Email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <input
              maxLength={11}
              inputMode="numeric"
              className={`${inputBase} ${errors.phone ? inputError : inputOk}`}
              placeholder="Telefone (apenas números)*"
              {...register("phone", {
                required: "Telefone é obrigatório",
                minLength: { value: 10, message: "Telefone inválido" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Use apenas números",
                },
              })}
              onInput={(e) =>
                (e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  ""
                ))
              }
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray p-8 rounded-xl">
        <StepTitle step={2} title="Endereço" />

        <div className="flex flex-col gap-6 mt-10">
          <div>
            <input
              maxLength={8}
              inputMode="numeric"
              className={`${inputBase} ${errors.cep ? inputError : inputOk}`}
              placeholder="CEP (apenas números)*"
              {...register("cep", {
                required: "CEP é obrigatório",
                minLength: { value: 8, message: "CEP deve ter 8 números" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Use apenas números",
                },
              })}
              onInput={(e) =>
                (e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  ""
                ))
              }
            />
            {loading && (
              <span className="text-gray-500 text-sm">
                Buscando endereço...
              </span>
            )}
            {errors.cep && (
              <span className="text-red-500 text-sm">{errors.cep.message}</span>
            )}
          </div>

          <div>
            <input
              className={`${inputBase} ${errors.adress ? inputError : inputOk}`}
              placeholder="Endereço*"
              {...register("adress", { required: "Endereço é obrigatório" })}
            />
            {errors.adress && (
              <span className="text-red-500 text-sm">
                {errors.adress.message}
              </span>
            )}
          </div>

          <div>
            <input
              className={`${inputBase} ${errors.number ? inputError : inputOk}`}
              placeholder="Número*"
              {...register("number", { required: "Número é obrigatório" })}
            />
            {errors.number && (
              <span className="text-red-500 text-sm">
                {errors.number.message}
              </span>
            )}
          </div>

          <div>
            <input
              className={`${inputBase} ${inputOk}`}
              placeholder="Complemento (opcional)"
              {...register("complement")}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <input
                className={`${inputBase} ${errors.city ? inputError : inputOk}`}
                placeholder="Cidade*"
                {...register("city", { required: "Cidade é obrigatória" })}
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div>
              <input
                className={`${inputBase} ${
                  errors.state ? inputError : inputOk
                }`}
                placeholder="Estado*"
                {...register("state", { required: "Estado é obrigatório" })}
              />
              {errors.state && (
                <span className="text-red-500 text-sm">
                  {errors.state.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
