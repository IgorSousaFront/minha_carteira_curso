import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import AppRoutes from './routes';

import darkTheme from './styles/themes/dark';
// import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles  />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
