import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Некорректный email').required('Введите email'),
  password: yup
    .string()
    .min(4, 'Пароль от 4 символов')
    .max(32, 'Пароль до 32 символов')
    .required(''),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().min(1, '').required(''),
  })
  .concat(LoginFormSchema);

export const ForgotPasswordFormSchema = yup.object().shape({
  email: yup.string().email('Некорректный email').required('Введите email'),
});
