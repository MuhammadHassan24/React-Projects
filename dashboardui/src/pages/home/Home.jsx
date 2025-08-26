import React from 'react'
import { useLocation } from 'react-router'
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import { Navigation } from '/src/constant/navigation';

function Home() {
    const location = useLocation();

    const currentPath = location.pathname === `${Navigation.home.dashboard}`;



    return (
        currentPath ? <Dashboard /> : <Analytics />
    )
}

export default Home
