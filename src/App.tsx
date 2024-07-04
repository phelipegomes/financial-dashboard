import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { themeSettings } from './theme';

export default function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Routes>
              <Route path="/" element={<div>Dashboard Page</div>} />
              <Route path="/predictions" element={<div>Prediction Page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
