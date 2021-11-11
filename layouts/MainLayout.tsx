import { FC } from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';

import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  className,
}) => {
  return (
    <Box className={clsx('wrapper', className)}>
      <Box className="leftSide">
        <LeftMenu />
      </Box>
      <Box className={clsx('content', { 'content--full': contentFullWidth })}>{children}</Box>
      {!hideComments && (
        <Box className="rightSide">
          <SideComments />
        </Box>
      )}
    </Box>
  );
};
