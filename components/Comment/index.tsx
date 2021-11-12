/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC, useState } from 'react';
import { Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreHorizOutlined as MoreIcon } from '@mui/icons-material';

import styles from './Comment.module.scss';

interface CommentProps {
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}
export const Comment: FC<CommentProps> = ({ user, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: ChangeEvent<any>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className={styles.comment}>
      <Box className={styles.userInfo}>
        <img src={user.avatarUrl} alt="Avatar" />
        <b>{user.fullname}</b>
        <span>{createdAt}</span>
      </Box>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </Box>
  );
};
