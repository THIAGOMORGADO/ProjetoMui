import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactNode, } from 'react';
import { IAppProviderChildren, useDrawerContext } from '../contexts';



interface ILayoutBaseProps  {
  titulo: string;
  children: IAppProviderChildren;
  barraDeFerramentas?: ReactNode;
}


export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, titulo, barraDeFerramentas } : any) => {
  const theme = useTheme();
  const smDowm = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDowm = useMediaQuery(theme.breakpoints.down('md'))
  const { toggleDrawerOpen } = useDrawerContext()


  return(
     <Box height='100%' display="flex" flexDirection="column" gap={1}>
      <Box  padding={1} height={theme.spacing(smDowm ? 6 : mdDowm ? 8 : 12)} display="flex" alignItems="center" gap={1}>
       {
        smDowm && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>

        )
       }
        <Typography variant={smDowm ? 'h5' : mdDowm ? 'h4' : "h3"} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
          {titulo}
        </Typography>
      </Box>
        <Box>
       {
        barraDeFerramentas && (
          <Box>
            {barraDeFerramentas}
          </Box>
        )
       }
        </Box>
      <Box flex={1} overflow="auto">
        {children}
      </Box>
      
     </Box>
    )
}

