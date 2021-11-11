import React from 'react';
import Image from 'next/image';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Message as MessageIcon, PersonAddAlt1Outlined as UserAddIcon } from '@mui/icons-material';

import { PostActions } from '../PostActions';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <Box className="container">
        <Typography variant="h4" className={styles.title}>
          Губернатор штата Миссури назвал журналиста «хакером» за «расшифровку HTML-кода» и
          пригрозил ему уголовным делом
        </Typography>
      </Box>
      <Image
        width={1020}
        height={679}
        src="https://leonardo.osnova.io/ef7b78b5-09eb-5afc-bf71-7bf3841b5d33/-/preview/1100/-/format/webp/"
        alt="code"
      />
      <Box className="container">
        <Box>
          <Typography>
            Журналист нашёл номера социального страхования в исходном коде сайта в открытом виде и
            сообщил об этом властям. В ответ политик хочет начать против него уголовное
            преследование.
          </Typography>
          <Typography>
            Майк Парсон, губернатор американского штата Миссури, пригрозил расследованием
            журналисту, который сообщил об уязвимости на сайте Департамента начального и среднего
            образования (DESE).
          </Typography>
          <Typography>
            Репортер St Louis. Post-Dispatch Джош Рено рассказал, что в исходном кода HTML-страницы
            поиска на сайте Департамента начального и среднего образования (DESE) хранятся номера
            социального страхования и другие личные данные 100 тысяч учителей. Перед публикацией он
            сообщил об уязвимости в департамент.
          </Typography>
          <Typography>
            После этого губернатор сообщил о «серьезном нарушении закона» и пригрозил журналисту
            уголовным преследованием. Парсон назвал Рено «хакером» и заявил, что у него «не было
            полномочий на преобразование и декодирование HTML кода». Он уверен, что «данные не были
            в свободном доступе».
          </Typography>
          <Typography>
            Представитель St. Louis Post-Dispatch заявил Vice, что «журналист поступил ответственно,
            сообщив о своих выводах в Департамент, чтобы штат мог принять меры. Хакер — это человек,
            который нарушает безопасность с преступным умыслом. В данном случае не было никакого
            нарушения системы безопасности, и уж тем более не было никакого злого умысла. DESE
            необоснованно пытается скрыть свои промахи, называя это „хакингом“».
          </Typography>
          <Typography>
            В твиттере отмечают, что получить доступ к HTML-коду сайта можно с помощью двух кликов,
            поэтому нельзя сказать, что информация была «закодирована». Специалисты по
            кибербезопасности отмечают, что подобное поведение администрации штата поставит под
            угрозу безопасность его жителей, так как исследователи перестанут сообщать об
            уязвимостям на государственных ресурсах из-за угрозы уголовного преследования.
          </Typography>
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
