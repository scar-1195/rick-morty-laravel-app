import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FavoritesPage, HomePage } from "../Pages";
import { Navbar } from '../components';
export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};
