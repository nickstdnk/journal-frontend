import { FC, useState } from 'react';
import { setCookie } from 'nookies';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/schemas/validations';

import { Box, Button, Typography, Alert } from '@mui/material';
import { KeyboardArrowLeft as BackIcon } from '@mui/icons-material';

import styles from '../AuthDialog.module.scss';
import { FormField } from '../../FormField';
import { CreateUserDto } from '../../../utils/api/types';
import { UserApi } from '../../../utils/api';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';

export default interface RegisterStage2Props {
  onOpenMainRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterStage2: FC<RegisterStage2Props> = ({ onOpenMainRegister, onOpenLogin }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
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
          <Box className={styles.registerContent} onClick={onOpenMainRegister}>
            <BackIcon className="mr-10" />
            <Typography>Назад</Typography>
          </Box>

          <Box style={{ width: '328px', height: '552px' }}>
            <Typography className={styles.title}>Регистрация</Typography>
            <FormField autoFocus name="fullName" placeholder="Имя и фамилия" />
            <FormField name="email" placeholder="Почта" />
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
              Зарегистрироваться
            </Button>
            <Box className="d-flex flex-column mt-15">
              <Typography>
                Есть аккаунт?{' '}
                <a style={{ color: '#3766a9', cursor: 'pointer' }} onClick={onOpenLogin}>
                  Войти
                </a>
              </Typography>
            </Box>
            <Box style={{ marginTop: '75px', minHeight: 22 }}>
              <a style={{ color: '#3766a9', cursor: 'pointer' }}>Условия использования</a>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};
