import Link from 'next/link';
import { Paper, Box, Avatar, Typography, Button, Tabs, Tab } from '@mui/material';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@mui/icons-material';

import { MainLayout } from '../../layouts/MainLayout';
import { Post } from '../../components/Post';

export default function Profile() {
  return (
    <MainLayout contentFullWidth>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <Box className="d-flex justify-between">
          <Box>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://leonardo.osnova.io/5d36a3a0-6e0b-5695-babd-3d72a73a30d8/-/format/webp/"
            />
            <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
              Nikolay Stadnik
            </Typography>
          </Box>
          <Box>
            <Link href="/profile/settings" passHref>
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
                color="inherit">
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </Box>
        </Box>
        <Box className="d-flex mb-10 mt-10">
          <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </Box>
        <Typography>На проекте с 20 авг 2021</Typography>

        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <Box className="d-flex align-start">
        <Box className="mr-20 flex">
          <Post />
        </Box>
        <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
          <b>Подписчики</b>
          <Box className="d-flex mt-15">
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
          </Box>
        </Paper>
      </Box>
    </MainLayout>
  );
}
