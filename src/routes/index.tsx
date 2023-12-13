import { Routes, Route, Navigate } from 'react-router-dom'

import {  useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react';

import { Dashboard } from '../pages';

export const AppRoute = () => {
 const { setDrawerOption } = useDrawerContext();

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
      <Route path="/home" element={<Dashboard />} />
      <Route  path='*' element={<Navigate to="/home"/>}/>
      
     

    </Routes>
  )
};

