import { ChangeEvent, FC, useState } from 'react';
import Image from 'next/image';
import { Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreHorizOutlined as MoreIcon } from '@mui/icons-material';

import styles from './Comment.module.scss';

interface CommentProps {
  user: {
    fullname: string;
  };
  text: string;
}
export const Comment: FC<CommentProps> = ({ user, text }) => {
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
        <Image
          width={32}
          height={32}
          src="https://leonardo.osnova.io/d3e4b8f6-2321-5119-ac91-f2106eee198d/-/scale_crop/64x64/-/format/webp/"
          alt="Avatar"
        />
        <b>Трансгендолёт</b>
        <span>5 часов</span>
      </Box>
      <Typography className={styles.text}>
        Все таки чиновник — это состояние души, которое не зависит от национальности, страны и
        возраста. Все они одинаковые.
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton style={{ backgroundColor: 'transparent' }} onClick={handleClick}>
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
