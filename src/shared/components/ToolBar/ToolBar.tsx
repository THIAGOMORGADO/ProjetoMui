import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import React from 'react';

interface IToolBarProps {
  search: string,
  showInputSearch: boolean,
  OnChanger?: (newText: string) => void,
  // btn
  NewBtnText: string,
  ShowButton: boolean,
  onCliCksNew?: () => void 

}

export const ToolBar: React.FC<IToolBarProps> = ({
  search = '', 
  showInputSearch = false, 
  OnChanger,
  NewBtnText = 'Novo',
  ShowButton = true,
  onCliCksNew
}) => {
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
     {showInputSearch && (
      <TextField 
        size="small"
        placeholder='Pesquisar...'
        value={search}
        onChange={(e) => OnChanger?.(e.target.value)}
     />
     )}
     <Box flex={1} display="flex" justifyContent="end">
      {(
        ShowButton && (
          <Button
          variant='contained'
          color="primary"
          disableElevation
          onClick={onCliCksNew}
          endIcon={<Icon>add</Icon>}
        > 
        {NewBtnText}</Button>
        )
      )}
     </Box>

     
    </Box>
  );
}

