
import {
  Avatar,
  Box,
  Divider,
  Drawer,

  Icon,

  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { ListItemLInk } from '../ListItemLInk';


export const DraweMenu = ({ children }: any) => {
  const theme = useTheme();
  const smDowm = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDowm ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box width={theme.spacing(28)} display='flex' flexDirection='column' height="100%">
          <Box width="100%" height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt='avatar' src='https://avatars.githubusercontent.com/u/27393649?v=4' />
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOptions) => (
                <ListItemLInk
                  key={drawerOptions.path}
                  label={drawerOptions.label}
                  icon={drawerOptions.icon}
                  to={drawerOptions.path}
                  onClick={smDowm ? toggleDrawerOpen : undefined}

                />

              ))}

            </List>

          </Box>

          <Box >
            <List component="nav">

              <ListItemButton onClick={toggleTheme} >
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alterar tema" />
              </ListItemButton>


            </List>

          </Box>
        </Box>
      </Drawer>
      <Box height={'100vh'} marginLeft={smDowm ? 0 : theme.spacing(
        28
      )}>
        {children}
      </Box>

    </>

  )
}

