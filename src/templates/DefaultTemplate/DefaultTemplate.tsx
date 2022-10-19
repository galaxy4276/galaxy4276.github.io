import React, { PropsWithChildren } from 'react';
import { Header } from '../../components/common/Header';
import { DefaultPaddingLayout } from '../../layouts';

export const DefaultTemplate: React.FC<PropsWithChildren> = ({ children }) => (
  <main>
    <Header />
    <DefaultPaddingLayout>
      { children }
    </DefaultPaddingLayout>
  </main>
);
