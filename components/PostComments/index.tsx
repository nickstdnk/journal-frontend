import { FC, useState } from 'react';
import { Box, Divider, Paper, Tab, Tabs, Typography } from '@mui/material';

import { Comment } from '../Comment';
import data from '../../data';
import { AddCommentForm } from '../AddCommentForm';

export const PostComments: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <Box className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <Box className="mb-20" />
        {comments.map((obj) => (
          <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt} />
        ))}
      </Box>
    </Paper>
  );
};
