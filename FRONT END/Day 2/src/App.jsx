import UserHomePage from './Components/UserHomePage';
import LoginPage from './Components/LoginPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage';
import NavBar from './Components/NavBar';
import SidePanel from './Components/AdminSidePanel';
import AdminHomePage from './Components/AdminHomePage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/SignUp' element={<SignUpPage/>}/>
      <Route path='/AdminHomePage' element={<AdminHomePage/>}/>
      <Route path='/UserHomePage' element={<UserHomePage/>}/>
      <Route path='/Nav' element={<NavBar/>}/>
      <Route path='/side' element={<SidePanel/>}/>
    </Routes>
    </BrowserRouter>
  )
}
