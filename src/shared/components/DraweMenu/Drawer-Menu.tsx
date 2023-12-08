
import { Avatar, Box, Divider, Drawer, Icon, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import {} from '@mui/icons-material/Inbox';

export const DraweMenu = ({ children }: any) => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        variant='permanent'
      >
        <Box width={theme.spacing(28)} display='flex' flexDirection='column' height="100%">
          <Box width="100%" height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt='avatar' src='https://avatars.githubusercontent.com/u/27393649?v=4' />
          </Box>

          <Divider />

          <Box flex={1}>
          <ListItem component="nav">
            <ListItemButton>
              <ListItemIcon>
                <Icon>home</Icon>
              
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            
          </ListItem>

          <ListItem component="nav">
            <ListItemButton>
              <ListItemIcon>
                <Icon>shop</Icon>
              
              </ListItemIcon>
              <ListItemText primary="produtos" />
            </ListItemButton>
            
          </ListItem>
          </Box>

        </Box>
      </Drawer>
      <Box height={'100vh'} marginLeft={theme.spacing(
        28
      )}>
        {children}
      </Box>

    </>

  )
}

