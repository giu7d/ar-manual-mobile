import validatejs from "validate.js";

export const validation = {
  email: {
    presence: {
      message: "^Por favor, informe um endereço de email!",
    },
    email: {
      message: "^Por favor, informe um endereço de email válido.",
    },
  },
  password: {
    presence: {
      message: "^Atenção informe uma senha",
    },
  },
};

export function validate(form: { email: string; password: string }) {
  return validatejs(form, validation, { format: "flat" });
}
