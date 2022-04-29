import { CSSProperties, FC } from 'react';
import {
  ModeCommentOutlined as CommentsIcon,
  CachedOutlined as RepostIcon,
  BookmarkBorderOutlined as FavouriteIcon,
  IosShareOutlined as ShareIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  top: '5',
  width: '100%',
  listStyle: 'none',
  padding: '6px',
  marginLeft: '6px',
  margin: '0',
};

export const PostActions: FC = () => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavouriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
