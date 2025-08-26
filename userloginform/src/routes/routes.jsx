import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "../components/auth/Register";
import { AuthProvider } from "../authcontext/authcontext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/auth/Login";
import Home from "../components/Home";

export const Router = React.memo(() => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
});
