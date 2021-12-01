import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import Dashboard from './pages/Dashboard';
import Lists from './pages/Lists';
import SignIn from './pages/SignIn';

import Layout from './components/Layout';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles  />
      <Layout>
        {/* <Dashboard /> */}
        <Lists />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
