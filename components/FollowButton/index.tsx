import { FC, useState } from 'react';
import { Button } from '@mui/material';
import { PersonAddAlt1Outlined as AddIcon, CheckOutlined as CheckIcon } from '@mui/icons-material';

import styles from './FollowButton.module.scss';

export const FollowButton: FC = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      color="inherit"
      style={{ minWidth: 44, width: 44, height: 40 }}>
      {!followed ? <AddIcon /> : <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />}
    </Button>
  );
};
