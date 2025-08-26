import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../layout/Layout"
import Dashboard from "../pages/home/Dashboard"
import Analytics from "../pages/home/Analytics"
import Accounts from "../pages/profile/Accounts"
import Projects from "../pages/profile/Projects"
import DataTable from "../pages/application/DataTable"
import Wizard from "../pages/application/Wizard"
import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"
import Application from "../pages/application/Application"
import Ecommerce from "../pages/ecommerce/Ecommerce"
import Users from "../pages/profile/Users"
import { Navigation } from "../constant/navigation"
import Kanban from "../pages/application/Kanban"
import Calendar from "../pages/application/Calendar"
import TabPage from "../pages/TabPage"

export const Router = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tabs" element={<TabPage />} />
                <Route path="/" element={<Layout />}>

                    <Route path={Navigation.home.path} element={<Home />}>
                        <Route path={Navigation.home.dashboard} element={<Dashboard />} />
                        <Route path={Navigation.home.analytics} element={<Analytics />} />
                    </Route>
                    <Route path={Navigation.profile.path} element={<Profile />}>
                        <Route path={Navigation.profile.users} element={<Users />} />
                        <Route path={Navigation.profile.accounts} element={<Accounts />} />
                        <Route path={Navigation.profile.projects} element={<Projects />} />
                    </Route>
                    <Route path={Navigation.application.path} element={<Application />}>
                        <Route path={Navigation.application.datatables} element={<DataTable />} />
                        <Route path={Navigation.application.wizard} element={<Wizard />} />
                        <Route path={Navigation.application.kanban} element={<Kanban />} />
                        <Route path={Navigation.application.calendar} element={<Calendar />} />
                    </Route>
                    <Route path={Navigation.ecommerce.path} element={<Ecommerce />}>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
})
