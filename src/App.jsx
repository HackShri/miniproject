
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  AuthPage from './Page/Authpage.jsx'
import  LoginPage  from '../src/components/AuthComponents/Loginform.jsx';
import  Register  from '../src/components/AuthComponents/Register.jsx';
import Header from './components/header.jsx';
function App() {
  const authentication = true

   
  return (<>
  <Routes>
<Route path='/' element={<Header/>}></Route>
<Route path='/auth' element={<AuthPage variable={authentication}/>} >
  <Route path='Login' element={<LoginPage/>}></Route>
   <Route path='Register' element={<Register/>}></Route>
</Route >


  </Routes>



  
  
  
  </>)
}

export default App
