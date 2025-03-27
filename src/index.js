import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import StateHook from './Pages/StateHookPage/StateHook';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Users from './Pages/Users/Users';
import User from './Pages/Users/User';

import Root from './Pages/Root';
import DescribeUI from './Pages/DescribeUI/DescribeUI';
import UseActionState from './Pages/UseActionState/UseActionState';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter
  future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,

  }}>
    <Routes>
      <Route path="/" element={<Root />}>
            <Route index element={<Welcome/>}/>
            <Route path='/statehooks' element={<StateHook/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/useState' element={<UseActionState/>}/>
            <Route path='/ui' element={<DescribeUI/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/:id'  element={<User/>} errorElement={<ErrorPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


