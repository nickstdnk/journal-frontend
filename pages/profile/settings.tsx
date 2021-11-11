import { Box, Button, Paper, Typography, Divider, TextField } from '@mui/material';
import {
  SettingsOutlined as SettingIcon,
  NotificationsOutlined as NotificationIcon,
  BlockOutlined as BlockIcon,
} from '@mui/icons-material';

import { MainLayout } from '../../layouts/MainLayout';

import styles from './settings.module.scss';

const settings = [
  { text: 'Основные', icon: <SettingIcon />, path: '/' },
  { text: 'Уведомления', icon: <NotificationIcon />, path: '/' },
  { text: 'Черный список', icon: <BlockIcon />, path: '/' },
];

export default function Settings() {
  return (
    <MainLayout contentFullWidth>
      <Box className={styles.root}>
        <Box className={styles.settings}>
          <Paper className="p-20" elevation={0}>
            <Typography variant="h6">Основные настройки</Typography>
            <Divider className="mt-20 mb-30" />
            <form>
              <TextField
                className="mb-20"
                size="small"
                label="Никнейм"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                className="mb-20"
                size="small"
                label="Эл. почта"
                variant="outlined"
                fullWidth
                required
              />
              <TextField size="small" label="Пароль" variant="outlined" fullWidth required />
              <Divider className="mt-30 mb-20" />
              <Button color="primary" variant="contained">
                Сохранить изменения
              </Button>
            </form>
          </Paper>
        </Box>
        <Paper style={{ width: 300, height: 160 }} elevation={0}>
          <Box className={styles.menu}>
            <b>Настройки</b>
            <ul>
              {settings.map((obj) => (
                <li key={obj.path}>
                  <Button>
                    {obj.icon}
                    {obj.text}
                  </Button>
                </li>
              ))}
            </ul>
          </Box>
        </Paper>
      </Box>
    </MainLayout>
  );
}
