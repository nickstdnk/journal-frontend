import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Paper, Typography, Box } from '@mui/material';
import { PostActions } from '../PostActions';

import styles from './Post.module.scss';

export const Post: FC = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Box style={{ padding: 20 }}>
        <Typography variant="h5" className={styles.title}>
          <Link href="/news/test-123">
            <a>
              Губернатор штата Миссури назвал журналиста «хакером» за «расшифровку HTML-кода» и
              пригрозил ему уголовным делом
            </a>
          </Link>
        </Typography>
        <Typography className="mt-10">
          Журналист нашёл номера социального страхования в исходном коде сайта в открытом виде и
          сообщил об этом властям. В ответ политик хочет начать против него уголовное преследование.
        </Typography>
      </Box>
      <Image
        alt=""
        src="https://leonardo.osnova.io/ef7b78b5-09eb-5afc-bf71-7bf3841b5d33"
        height={426.66}
        width={640}
      />
      <Box style={{ width: 250, padding: 6, marginLeft: 6 }}>
        <PostActions />
      </Box>
    </Paper>
  );
};
