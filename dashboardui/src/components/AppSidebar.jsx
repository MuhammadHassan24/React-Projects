import { House, FileText, GalleryVerticalEnd, EllipsisVertical, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { Scrollable } from './Scrollable';
import { SidebarButton } from './SideBarButton';
import { Navigation } from '../constant/navigation';

const items = [
  {
    icon: House, title: "Home", path: `${Navigation.home.path}`,
    children: [{ title: "Dashboard", path: `${Navigation.home.dashboard}` }, { title: "Analytics", path: `${Navigation.home.analytics}` }]
  },
  {
    icon: FileText, title: "Profile", path: `${Navigation.profile.path}`,
    children: [
      { title: "Users", path: `${Navigation.profile.users}` }, { title: "Account", path: `${Navigation.profile.accounts}` },
      { title: "Projects", path: `${Navigation.profile.projects}` }
    ]
  },
  {
    icon: GalleryVerticalEnd, title: "Application", path: `${Navigation.application.path}`,
    children: [
      { title: "Kanban", path: `${Navigation.application.kanban}` }, { title: "Wizard", path: `${Navigation.application.wizard}` },
      { title: "Data tables", path: `${Navigation.application.datatables}` }, { title: "Calendar", path: `${Navigation.application.calendar}` }
    ]
  },
  {
    icon: GalleryVerticalEnd, title: "E-commerce", path: `${Navigation.ecommerce.path}`,
    children: [
      { title: "Overview", }, { title: "Product", },
    ]
  },
];

function AppSidebar({ sidebarOpen, setSidebarOpen }) {
  const [openNavMenu, setOpenNavMenu] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`h-screen fixed top-0 left-0 bg-white transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-20'}`}>
      <button onClick={toggleSidebar} className="absolute z-10 -right-3.5 top-14 p-1 rounded-md border ">
        <ChevronRight className={`transition-transform duration-200 ${sidebarOpen ? "rotate-180" : ""}`} />
      </button>
      <Scrollable>
        <div className='flex justify-center items-center pb-14 p-4 '>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className='flex flex-col gap-5 px-1'>
            {items.map((item) => (
              <SidebarButton
                key={item.title}
                openSideBar={sidebarOpen}
                nav={item}
                setOpenNavMenu={setOpenNavMenu}
                isOpen={openNavMenu === item.title}
              />
            ))}
          </div>
        </div>
      </Scrollable>
      <div className='absolute bottom-0 w-full p-3'>
        <div className={`w-full flex justify-center items-center bg-[#6E39CB] rounded-2xl p-3 ${sidebarOpen ? 'h-20' : 'h-12'}`}>
          {sidebarOpen ? (
            <div className='flex gap-2 items-center'>
              <img className='size-fit' src="/images/person.png" alt="" />
              <div>
                <h1 className='text-sm text-white'>John Dio</h1>
                <h1 className='text-xs text-white'>johndio@gmail.com</h1>
              </div>
              <EllipsisVertical color='white' />
            </div>
          ) : (
            <div className='flex flex-col items-center'>
              <img className='w-8 h-8 rounded-full' src="/images/person.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppSidebar