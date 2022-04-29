import {FC, useState} from 'react'

import {Box, Dialog} from '@mui/material'
import {Close as CloseIcon} from '@mui/icons-material'

import {MainRegister} from './forms/MainRegister'
import {RegisterStage2} from './forms/RegisterStage2'
import {MainLogin} from './forms/MainLogin'
import {LoginStage2} from './forms/LoginStage2'
import {ForgotPassword} from './forms/ForgotPassword'

import styles from './AuthDialog.module.scss'

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = useState<
    'mainRegister' | 'registerStage2' | 'mainLogin' | 'loginStage2' | 'forgotPassword'
  >('mainRegister');
  return (
    <Dialog open={visible} onClose={onClose} maxWidth={false}>
      <Box className={styles.dialog} style={{ overflow: 'hidden' }}>
        <Box className={styles.closeIcon}>
          <CloseIcon onClick={() => onClose()} />
        </Box>
        <Box className={styles.images}>
          <svg className={styles.logo} viewBox="0 0 24 25">
            <path fill="#00FF00" d="M0 19h8.5v6H0v-6z"></path>
            <path d="M0 7h8.5v18l6.5-6V7V0H8.5v7z"></path>
            <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
          </svg>
        </Box>

        <Box className={styles.auth}>
          {formType === 'mainRegister' && (
            <MainRegister
              onOpenMainRegister={() => setFormType('mainRegister')}
              onOpenRegisterStage2={() => setFormType('registerStage2')}
              onOpenMainLogin={() => setFormType('mainLogin')}
            />
          )}
          {formType === 'registerStage2' && (
            <RegisterStage2
              onOpenLogin={() => setFormType('mainLogin')}
              onOpenMainRegister={() => setFormType('mainRegister')}
            />
          )}
          {formType === 'mainLogin' && (
            <MainLogin
              onOpenLoginStage2={() => setFormType('loginStage2')}
              onOpenMainRegister={() => setFormType('mainRegister')}
            />
          )}
          {formType === 'loginStage2' && (
            <LoginStage2
              onOpenMainLogin={() => setFormType('mainLogin')}
              onOpenForgotPassword={() => setFormType('forgotPassword')}
              onOpenMainRegister={() => setFormType('mainRegister')}
            />
          )}
          {formType === 'forgotPassword' && (
            <ForgotPassword
              onOpenLoginStage2={() => setFormType('loginStage2')}
              onOpenMainRegister={() => setFormType('mainRegister')}
            />
          )}
        </Box>
      </Box>
    </Dialog>
  );
};
