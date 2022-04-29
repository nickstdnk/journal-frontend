import {FC, useEffect, useState} from 'react'
import Link from 'next/link'
import {Avatar, Box, Button, IconButton, Menu, MenuItem, Paper} from '@mui/material'
import {
  KeyboardArrowDownOutlined as ArrowIcon,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationIcon,
  PersonOutline as UserIcon,
  Search as SearchIcon,
  SmsOutlined as MessageIcon,
} from '@mui/icons-material'

import styles from './Header.module.scss'

import {AuthDialog} from '../AuthDialog'
import {useAppSelector} from '../../redux/hooks'
import {selectUserData} from '../../redux/slices/user'
import {destroyCookie} from 'nookies'

export const Header: FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    destroyCookie(null, 'token', {
      path: '/',
    });
  };

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <Box className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <svg className={styles.logo} viewBox="0 0 24 25">
              <path fill="#00FF00" d="M0 19h8.5v6H0v-6z"></path>
              <path d="M0 7h8.5v18l6.5-6V7V0H8.5v7z"></path>
              <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
            </svg>
          </a>
        </Link>
        <Box className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </Box>
        <Link href="/write">
          <a>
            <Button variant="contained" color="inherit" className={styles.createButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </Box>
      <Box className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {userData ? (
          <>
            <Link href="/profile/1">
              <a className="d-flex align-center">
                <Avatar
                  className={styles.avatar}
                  alt="Nikolay Stadnik"
                  src="https://leonardo.osnova.io/5d36a3a0-6e0b-5695-babd-3d72a73a30d8/-/scale_crop/108x108/-/format/webp/"
                />
              </a>
            </Link>
            <IconButton onClick={handleClick}>
              <ArrowIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
              <MenuItem onClick={handleClose}>Выйти</MenuItem>
            </Menu>
          </>
        ) : (
          <Box className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </Box>
        )}
      </Box>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
