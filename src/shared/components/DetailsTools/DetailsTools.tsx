import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';
import React from 'react';

interface IDetailsToolsProps {
  newText?: string,
  showBtnNew?: boolean,
  showBtnVoltar?: boolean,
  showBtnDelete?: boolean,
  showbtnSave?: boolean,
  showBtnSaveAndBack?: boolean,

  onClicksNewText?: () => void;
  onClicksBack?: () => void;
  onClicksdeleted?: () => void;
  onClicksSave?: () => void;
  onClicksSabeAndBack?: () => void;

}

export const DetailsTools: React.FC<IDetailsToolsProps> = ({
  newText = "Novo",

  showBtnNew = true,
  showbtnSave = true,
  showBtnVoltar = true,
  showBtnDelete = true,
  showBtnSaveAndBack = false,

  onClicksNewText,
  onClicksBack,
  onClicksSabeAndBack,
  onClicksSave,
  onClicksdeleted
}) => {
  const theme = useTheme();
  return (
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
        {showBtnNew && (
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={onClicksNewText}
          startIcon={<Icon>add</Icon>}
        >
          {newText}</Button>
      )}
  

      {showbtnSave && (
        <Button
          variant='contained'
          color="primary"
          disableElevation
          onClick={onClicksSave}
          startIcon={<Icon>save</Icon>}
        >
          Salvar</Button>
      )}

      {showBtnSaveAndBack && (
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={onClicksSabeAndBack}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar</Button>
      )}

      {showBtnDelete && (
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={onClicksdeleted}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar</Button>
      )}
      <Divider variant='middle' orientation='vertical' />
      {showBtnVoltar && (
        <Button
          variant='outlined'
          color="primary"
          disableElevation
          onClick={onClicksBack}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar</Button>
      )}

    </Box>
  )
}

