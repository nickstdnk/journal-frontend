import React from 'react';

import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';

export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
    </MainLayout>
  );
}
