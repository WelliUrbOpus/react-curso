import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Dashboard/>} />



                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
} 
