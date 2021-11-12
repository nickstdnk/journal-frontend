import { FC } from 'react';
import Link from 'next/link';
import { Avatar, Box, Button, IconButton, Paper } from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  SmsOutlined as MessageIcon,
  NotificationsNoneOutlined as NotificationIcon,
  KeyboardArrowDownOutlined as ArrowIcon,
} from '@mui/icons-material';

import styles from './Header.module.scss';

export const Header: FC = () => {
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
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Nikolay Stadnik"
              src="https://leonardo.osnova.io/5d36a3a0-6e0b-5695-babd-3d72a73a30d8/-/scale_crop/108x108/-/format/webp/"
            />
          </a>
        </Link>

        <ArrowIcon />
      </Box>
    </Paper>
  );
};
