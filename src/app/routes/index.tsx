import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard, Login } from '../pages';

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Dashboard/>} />
                <Route path='/login' element={<Login/>} />



                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
} 
