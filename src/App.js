import React from 'react'
import AdminLayout from './containers/AdminLayout'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themes, { overrides } from './themes';
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
    ...themes.default, 
    ...overrides
});

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme = { theme }>
        <AdminLayout/>
      </MuiThemeProvider>
    </BrowserRouter>
    );
}

export default App;
