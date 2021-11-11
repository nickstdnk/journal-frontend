import { useState } from 'react';
import { Box } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import clsx from 'clsx';

import data from '../../data';
import { CommentItem } from './CommentItem';

import styles from './SideComments.module.scss';

export const SideComments = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Box className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </Box>
  );
};
