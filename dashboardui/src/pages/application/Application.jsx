import React from 'react'
import { useLocation } from 'react-router'
import Wizard from './Wizard';
import DataTable from './DataTable';
import { Navigation } from '/src/constant/navigation';
import Kanban from './Kanban';
import Calendar from './Calendar';

function Application() {

    const location = useLocation();

    const currentPath = () => {
        if (location.pathname === `${Navigation.application.wizard}`) {
            return <Wizard />
        } if (location.pathname === `${Navigation.application.datatables}`) {
            return <DataTable />
        } if (location.pathname === `${Navigation.application.kanban}`) {
            return <Kanban />
        } else {
            return <Calendar />
        }
    }

    return currentPath();
}

export default Application
