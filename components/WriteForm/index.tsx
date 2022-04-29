import { FC, useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import styles from './WriteForm.module.scss';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';

const Editor = dynamic<{}>(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  data?: PostItem;
}

export const WriteForm: FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState(data?.title || '');
  const [blocks, setBlocks] = useState(data?.body || []);

  const onAddPosts = async () => {
    try {
      setLoading(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.create(obj);
        router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, obj);
      }
    } catch (err) {
      console.warn('Create post', err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box style={{ backgroundColor: '#fff' }}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <Box className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </Box>
      <Button
        disabled={isLoading || !blocks.length || !title.length}
        onClick={onAddPosts}
        variant="contained"
        color="primary">
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </Box>
  );
};
