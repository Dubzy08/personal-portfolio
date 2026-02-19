import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Lenis from 'lenis';

function App() {

    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setLenis(lenisInstance);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home lenis={lenis}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;