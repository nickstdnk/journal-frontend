import { FC, useState } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/schemas/validations';
import { Alert, Box, Button, Typography } from '@mui/material';
import { KeyboardArrowLeft as BackIcon } from '@mui/icons-material';
import { FormField } from '../../FormField';

import styles from '../AuthDialog.module.scss';
import { Api } from '../../../utils/api';
import { LoginDto } from '../../../utils/api/types';
import { setCookie } from 'nookies';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';

interface LoginStage2Props {
  onOpenMainLogin: () => void;
  onOpenForgotPassword: () => void;
  onOpenMainRegister: () => void;
}

export const LoginStage2: FC<LoginStage2Props> = ({
  onOpenMainLogin,
  onOpenForgotPassword,
  onOpenMainRegister,
}) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto);
      setCookie(null, 'token', data.token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (err: any) {
      console.warn('Register error', err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box className={styles.registerContent} onClick={onOpenMainLogin}>
            <BackIcon className="mr-10" />
            <Typography>Назад</Typography>
          </Box>

          <Box style={{ width: '328px', height: '552px' }}>
            <Typography
              style={{
                marginTop: '114px',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '1.5',
              }}>
              Вход в аккаунт
            </Typography>
            <FormField name="email" autoFocus placeholder="Почта" />
            <FormField name="password" placeholder="Пароль" />
            {errorMessage && (
              <Alert severity="error" sx={{ borderRadius: '8px', marginTop: '10px' }}>
                {errorMessage}
              </Alert>
            )}
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type="submit"
              style={{ height: '48px' }}
              className="mt-15"
              variant="contained"
              fullWidth>
              Войти
            </Button>
            <Box className="d-flex flex-column mt-15">
              <Typography>
                <a style={{ color: '#3766a9', cursor: 'pointer' }} onClick={onOpenForgotPassword}>
                  Забыли пароль?
                </a>
              </Typography>
            </Box>
            <Box style={{ marginTop: '15px', minHeight: 22 }}>
              <a style={{ color: '#3766a9', cursor: 'pointer' }} onClick={onOpenMainRegister}>
                Регистрация
              </a>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};
