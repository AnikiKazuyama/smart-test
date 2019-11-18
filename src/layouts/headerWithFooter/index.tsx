import * as React from 'react';
import { IHeaderWithFooterLayout } from './types';

function HeaderWithFooterLayout({ children }: IHeaderWithFooterLayout) {
  return (
    <React.Fragment>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </React.Fragment>
  );
}

export default HeaderWithFooterLayout;
