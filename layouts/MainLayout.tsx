import { FC } from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu';

interface MainLayoutProps {
  className?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ className }) => {
  return (
    <Box className={clsx('wrapper', className)}>
      <Box className="leftSide">
        <LeftMenu />
      </Box>
    </Box>
  );
};
