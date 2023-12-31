import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme, DarkTheme } from "../theme";
import {Box, ThemeProvider} from '@mui/material'

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface IAppProviderChildren {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppProviderChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if(themeName === 'light') return LightTheme;

    return DarkTheme
  }, [themeName]) 

  return(
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width={'100vw'} height={"100vh"} bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}