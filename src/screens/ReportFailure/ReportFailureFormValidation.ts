import validatejs from "validate.js";

export const validation = {
  caoId: {
    presence: {
      message: "^Por favor, informe a falha identificada!",
    },
    length: {
      minimum: 1,
      message: "^Por favor, informe a falha identificada!",
    },
  },
  description: {
    length: {
      maximum: 555,
      message: "^Atenção a descrição deve conter no máximo 555 caracteres!",
    },
  },
  photos: {
    type: "array",
    presence: {
      message: "^Pelo menos uma foto deve ser informada.",
    },
    length: {
      minimum: 1,
      message: "^Pelo menos uma foto deve ser inserida.",
    },
  },
};

export async function validate(form: {
  caoId: string;
  description: string;
  photos: string[];
}) {
  try {
    await validatejs.async(form, validation);
    return undefined;
  } catch (error) {
    return Object.keys(error).map((key) => error[key]);
  }
}
