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
      message: "^Atenção informe uma senha.",
    },
    length: {
      minimum: 4,
      message: "^Atenção a senha deve conter ao menos 4 caracteres!",
    },
  },
};

export function validate(form: { email: string; password: string }) {
  return validatejs(form, validation, { format: "flat" });
}
