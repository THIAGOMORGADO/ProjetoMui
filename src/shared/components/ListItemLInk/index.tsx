import { Icon, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

export interface IListItemProps {
  label: string;
  icon: string; 
  to: string;
  onClick: (() => void) | undefined;
}

export const ListItemLInk: React.FC<IListItemProps> = ({label, icon, to, onClick}) => {
  const navigate =  useNavigate();
  
  const resolvedPath = useResolvedPath(to);

    const Math = useMatch({
    path: resolvedPath.pathname,
    end: false
  });

  const handleClick = () => {
    navigate(to)
    onClick?.();
  }

  return (
    <>
        <ListItemButton onClick={handleClick} selected={!!Math}>
          <ListItemIcon>
            <Icon>{icon}</Icon>

          </ListItemIcon>
          <ListItemText primary={label} />
      </ListItemButton>
    </>
  );
}

