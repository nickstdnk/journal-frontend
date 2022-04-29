import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Paper, Typography, Box } from '@mui/material';
import { PostActions } from '../PostActions';

import styles from './Post.module.scss';

interface PostProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}
export const Post: FC<PostProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Box style={{ padding: 20 }}>
        <Typography variant="h5" className={styles.title}>
          <Link href={`/news/${id}`}>
            <a>{title}</a>
          </Link>
        </Typography>
        <Typography className="mt-10">{description}</Typography>
      </Box>

      {imageUrl && (
        <Image
          alt={title}
          src="https://leonardo.osnova.io/ef7b78b5-09eb-5afc-bf71-7bf3841b5d33"
          height={426.66}
          width={640}
        />
      )}
      {/* <Box style={{ padding: 15, marginLeft: 6 }}> */}
      <PostActions />
      {/* </Box> */}
    </Paper>
  );
};
