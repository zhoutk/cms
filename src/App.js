import React from 'react'
import AdminLayout from './containers/AdminLayout'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themes, { overrides } from './themes';

const theme = createMuiTheme({
    ...themes.default, 
    ...overrides
});

function App() {
  return (
    <MuiThemeProvider theme = { theme }>
      <AdminLayout/>
    </MuiThemeProvider>);
}

export default App;
