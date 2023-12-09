import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import {  useDrawerContext } from '../shared/contexts'
export const AppRoute = () => {
  const { toggleDrawerOpen  } = useDrawerContext();


  return (
    <Routes>
      <Route path="/home" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Ola</Button>} />
      <Route path="*" element={<Navigate to="/signin" />} />

    </Routes>
  )
};