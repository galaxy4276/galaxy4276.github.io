import React, { PropsWithChildren } from 'react';

export const DefaultPaddingLayout: React.FC<PropsWithChildren> =
  ({ children }) => {
    return (
      <section className="w-full py-10 px-2 md:px-40 lg:px-64">
        { children }
      </section>
    );
};
