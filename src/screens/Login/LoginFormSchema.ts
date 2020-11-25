export interface ILoginFormSchema {
  email: string;
  password: string;
}

export const LoginFormSchema = {
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
