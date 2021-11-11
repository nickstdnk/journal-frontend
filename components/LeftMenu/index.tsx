import { FC } from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import {
  WhatshotOutlined as FireIcon,
  AccessTime as TimeIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@mui/icons-material';

import styles from './LeftMenu.module.scss';

const menu = [
  { text: 'Популярное', icon: <FireIcon />, path: '/' },
  { text: 'Свежее', icon: <TimeIcon />, path: '/fresh' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
  { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

export const LeftMenu: FC = () => {
  return (
    <Box className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button>
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
