import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';
import React from 'react';



export const DetailsTools: React.FC = () => {
  const theme = useTheme();
  return(
    <Box 
      component={Paper} 
      display="flex" 
      alignItems="center"
      marginX={1} 
      padding={1} 
      paddingX={2} 
      height={theme.spacing(5)}
      gap={1}
    >
       <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={() => {}}
          startIcon={<Icon>add</Icon>}
        > 
        Novo</Button>

        <Button
          variant='contained'
          color="primary"
          disableElevation
          onClick={() => {}}
          startIcon={<Icon>save</Icon>}
        > 
        Salvar</Button>
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={() => {}}
          startIcon={<Icon>save</Icon>}
        > 
        Salvar e voltar</Button>
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={() => {}}
          startIcon={<Icon>delete</Icon>}
        > 
        Apagar</Button>
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={() => {}}
          startIcon={<Icon>add</Icon>}
        > 
        Novo</Button>
        <Divider variant='middle' orientation='vertical'/>
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={() => {}}
          startIcon={<Icon>arrow_back</Icon>}
        > 
        Voltar</Button>
    </Box>
  )
}

