import { Box, Button, Input } from '@mui/material';
import { FC, useState } from 'react';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {}

export const AddCommentForm: FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <Box className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      )}
    </Box>
  );
};
