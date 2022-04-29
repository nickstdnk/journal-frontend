import {FC} from 'react'

import {FormProvider, useForm} from 'react-hook-form'
import {ForgotPasswordFormSchema} from '../../../utils/schemas/validations'

import {Box, Button, Typography} from '@mui/material'
import {KeyboardArrowLeft as BackIcon} from '@mui/icons-material'
import {FormField} from '../../FormField'

import styles from '../AuthDialog.module.scss'
import {yupResolver} from '@hookform/resolvers/yup'

interface ForgotPasswordProps {
  onOpenLoginStage2: () => void;
  onOpenMainRegister: () => void;
}

export const ForgotPassword: FC<ForgotPasswordProps> = ({
  onOpenLoginStage2,
  onOpenMainRegister,
}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordFormSchema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box className={styles.registerContent} onClick={onOpenLoginStage2}>
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
              Восстановить пароль
            </Typography>
            <FormField name="email" autoFocus placeholder="Почта" />
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              style={{ height: '48px' }}
              className="mt-15"
              variant="contained"
              fullWidth>
              Отправить
            </Button>
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
