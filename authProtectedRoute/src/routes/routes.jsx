import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import Login from "../pages/Login";


export const Router = React.memo(() => {
    return (
        <React.Suspense>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>)
})