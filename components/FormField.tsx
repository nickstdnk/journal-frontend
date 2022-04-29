import { FC } from 'react';

import { FormControl, FormHelperText, InputBase } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import styles from './AuthDialog/AuthDialog.module.scss';

interface FormFieldProps {
  name: string;
  placeholder: string;
  autoFocus?: boolean;
}

export const FormField: FC<FormFieldProps> = ({ name, placeholder, autoFocus }) => {
  const { register, formState } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputBase
        autoFocus={autoFocus}
        {...register(name)}
        name={name}
        placeholder={placeholder}
        style={{ marginTop: '10px' }}
        className={styles.inputBlock}
        error={!!formState.errors[name]?.message}
        sx={
          formState.errors[name]?.message && {
            '& .MuiInputBase-input': {
              borderColor: '#e52e3a',
              '&:focus': {
                borderColor: '#e52e3a',
                boxShadow: 0,
              },
            },
          }
        }
      />
      <FormHelperText error={!!formState.errors[name]?.message}>
        {formState.errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
};
