import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import {  useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react';
import DashBoard from '../pages/DashBoard';
import Atedimentos from '../pages/calls';
export const AppRoute = () => {
  const { toggleDrawerOpen, setDrawerOption  } = useDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        label: 'Pagina inicial',
        icon: 'home',
        path: '/signin'
      },
     
    ])
  }, [])
  return (
    <Routes>
      <Route path="/home" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Ola</Button>} />
      <Route  path='*' element={<Navigate to="/home"/>}/>
      
     

    </Routes>
  )
};