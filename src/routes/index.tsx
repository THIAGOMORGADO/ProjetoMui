import {Routes, Route, Navigate} from 'react-router-dom'

export const AppRoute = () => {
  return(
    <Routes>
      <Route path="/home" element={<p>tela o</p>} />
      <Route path="*" element={<Navigate to="/signin" />} />

    </Routes>
  )
}