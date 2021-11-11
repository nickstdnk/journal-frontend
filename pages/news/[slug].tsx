import React from 'react';
import { Box, Divider, Paper, Tab, Tabs, Typography } from '@mui/material';

import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import { Comment } from '../../components/Comment';

export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <Box className="mb-20" />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Paper>
    </MainLayout>
  );
}
