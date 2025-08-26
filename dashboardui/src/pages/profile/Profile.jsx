import React from 'react'
import { useLocation } from 'react-router'
import Users from './Users';
import Projects from './Projects';
import Accounts from './Accounts';
import { Navigation } from '/src/constant/navigation';

function Profile() {
    const location = useLocation();

    const currentPath = () => {
        if (location.pathname === `${Navigation.profile.users}`) {
            return <Users />;
        }
        if (location.pathname === `${Navigation.profile.projects}`) {
            return <Projects />;
        }
        return <Accounts />;
    }

    return currentPath();
}

export default Profile