import { FC } from 'react';
import Image from 'next/image';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Message as MessageIcon, PersonAddAlt1Outlined as UserAddIcon } from '@mui/icons-material';

import { PostActions } from '../PostActions';

import styles from './FullPost.module.scss';
import { OutputData } from '@editorjs/editorjs';

interface FullPostProps {
  title: string;
  blocks: OutputData['blocks'];
}

export const FullPost: FC<FullPostProps> = ({ title, blocks }) => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <Box className="container">
        <Typography variant="h4" className={styles.title}>
          {title}
        </Typography>

        <Box>
          {blocks.map((obj) => (
            <Typography key={obj.id} dangerouslySetInnerHTML={{ __html: obj.data.text }} />
          ))}
          <Box style={{ width: 250, marginLeft: -10 }}>
            <PostActions />
          </Box>
          <Box className="d-flex justify-between align-center mt-30 mb-30">
            <Box className={styles.userInfo}>
              <Image
                width={40}
                height={40}
                src="https://leonardo.osnova.io/8cb1ebc4-0765-55af-bdc7-55277864eeaa/-/scale_crop/108x108/-/format/webp/"
                alt="Avatar"
              />
              <b>Tatiana Kulina</b>
              <span>+3961</span>
            </Box>
            <Box>
              <Button variant="contained" color="inherit" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained" color="inherit">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
