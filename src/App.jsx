import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomePage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;