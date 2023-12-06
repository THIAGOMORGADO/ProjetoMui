import {Routes, Route, Navigate} from 'react-router-dom'
import {Button} from '@mui/material'
export const AppRoute = () => {
  return(
    <Routes>
      <Route path="/home" element={<Button>Ola</Button>} />
      <Route path="*" element={<Navigate to="/signin" />} />

    </Routes>
  )
}