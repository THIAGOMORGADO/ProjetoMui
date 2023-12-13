import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { IAppProviderChildren, useDrawerContext } from '../contexts';



interface ILayoutBaseProps  {
  titulo: string;
  children: IAppProviderChildren
}


export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, titulo } : any) => {
  const theme = useTheme();
  const smDowm = useMediaQuery(theme.breakpoints.down('sm'))
  const { toggleDrawerOpen } = useDrawerContext()


  return(
     <Box height='100%' display="flex" flexDirection="column" gap={1}>
      <Box padding={1} height={theme.spacing(12)} display="flex" alignItems="center"  gap={1}>
       {
        smDowm && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>

        )
       }
        <Typography variant='h5' >
          {titulo}
        </Typography>
      </Box>
      <Box>
       Barra de ferramenta📡 
      </Box>
      <Box>
        {children}
      </Box>
      
     </Box>
    )
}

