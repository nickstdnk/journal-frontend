import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './SideComments.module.scss';
import { Box } from '@mui/material';

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
  };
  text: string;
  post: {
    id: number;
    title: string;
  };
}

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <Box className={styles.commentItem}>
      <Box className={styles.userInfo}>
        <Image
          width={24}
          height={24}
          src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
          alt="User avatar"
        />
        <Link href={`/profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </Box>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${user.id}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </Box>
  );
};
