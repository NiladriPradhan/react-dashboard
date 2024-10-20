import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-blue-500 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 hover:bg-light-gray';

  return (
    <div className={`ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white shadow-xl shadow-slate-400 ${activeMenu ? 'block' : 'hidden'} `}>
      {activeMenu && (
        <>
          {/* Logo and Close Button */}
          <div className='flex justify-between items-center'>
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-500'
            >
              <SiShopware className='text-2xl' /> <span>Shoppy</span>
            </Link>
            <Tooltip title="Settings" className="right-4 p-0">
              <IconButton
                className="hover:bg-gray-100 hover:drop-shadow-xl"
                style={{ color: 'gray', borderRadius: '50%' }}
                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              >
                <MdOutlineCancel />
              </IconButton>
            </Tooltip>
          </div>

          {/* Links */}
          <div className="mt-10">
            {links?.map((section) => (
              <div key={section.title} className="text-gray-700 m-3 mt-4 uppercase">
                <p>{section.title}</p>
                {section?.links.map((elem) => (
                  <NavLink
                    to={`/${elem?.name}`}
                    key={elem.name}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="text-xl text-gray-400">{elem?.icon}</span>
                    <span className='capitalize text-gray-400'>{elem?.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
