// src/component/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import ThemeProvider from './ThemeProvider'; // ✅ Import your custom provider

export default function MainLayout() {
    return (
        <ThemeProvider>
            <Nav />
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    );
}
