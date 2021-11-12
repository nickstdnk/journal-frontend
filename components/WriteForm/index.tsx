import { FC } from 'react';
import { Box, Button, Input } from '@mui/material';
import dynamic from 'next/dynamic';

import styles from './WriteForm.module.scss';

const Editor = dynamic<{}>(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  title?: string;
}

export const WriteForm: FC<WriteFormProps> = ({ title }) => {
  return (
    <Box style={{ backgroundColor: '#fff' }}>
      <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
      <Box className={styles.editor}>
        <Editor />
      </Box>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </Box>
  );
};
