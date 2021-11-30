import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import MainContent from '../MainContent';

const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <MainContent />
    </Grid>
  );
}

export default Layout;