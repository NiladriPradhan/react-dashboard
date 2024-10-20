// import React from 'react';
// import { useStateContext } from '../contexts/ContextProvider';
// import { Avatar, IconButton, Tooltip } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import SearchIcon from '@mui/icons-material/SearchOutlined';

// const NavButton = ({ title, customFunc, icon }) => {
//   return (
//     <Tooltip title={title} className="right-4 p-4">
//       <IconButton
//         className="hover:bg-gray-100 text-green-300 hover:drop-shadow-xl ml-4"
//         style={{ color: "green", borderRadius: '50%' }}
//         onClick={customFunc}
//       >
//         {icon}
//       </IconButton>
//     </Tooltip>
//   );
// };

// const Navbar = () => {
//   const { activeMenu, setActiveMenu } = useStateContext();

//   const handleClick = (name) => {
//     if (name === 'cart') {
//       console.log("Cart clicked");
//     } else {
//       console.log(`${name} clicked`);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center p-4">
//       <div className="flex items-center">
//         <NavButton
//           title="Menu"
//           icon={<MenuIcon />}
//           customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
//         />
//         <div className='flex bg-blue-100 rounded-md p-2'>
//           <input type="text" placeholder='Search Page' className='outline-none bg-transparent' />
//           <SearchIcon className="" />
//         </div>

//       </div>
//       <div className="flex items-center">
//         <NavButton
//           title="Cart"
//           icon={<ShoppingCartIcon />}
//           customFunc={() => handleClick('cart')}
//         />
//         <NavButton
//           title="Chat"
//           icon={<ChatBubbleIcon />}
//           customFunc={() => handleClick('chat')}
//         />
//         <NavButton
//           title="Notifications"
//           icon={<NotificationsNoneIcon />}
//           customFunc={() => handleClick('notification')}
//         />
//         <Avatar
//           alt="Remy Sharp"
//           style={{ width: "30px", height: "30px" }}
//           src="/static/images/avatar/1.jpg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';

const NavButton = ({ title, customFunc, icon }) => {
  return (
    <Tooltip title={title} className="right-4 p-4">
      <IconButton
        className="hover:bg-gray-100 text-green-300 hover:drop-shadow-xl ml-4"
        style={{ color: "green", borderRadius: '50%' }}
        onClick={customFunc}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const availablePages = [
    { name: 'ecommerce', path: '/ecommerce' },
    { name: 'orders', path: '/orders' },
    { name: 'employees', path: '/employees' },
    { name: 'kanban', path: '/kanban' },
    { name: 'calendar', path: '/calendar' },
    { name: 'customers', path: '/customers' },
    { name: 'editor', path: '/editor' },
    // Add other pages here
  ];

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchInput.trim()) {
      const matchedPage = availablePages.find(page =>
        page.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      if (matchedPage) {
        navigate(matchedPage.path);
      } else {
        alert('Page not found');
      }
    }
  };

  const handleClick = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <NavButton
          title="Menu"
          icon={<MenuIcon />}
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        />
        <div className='flex bg-blue-100 rounded-md p-2'>
          <input
            type="text"
            placeholder='Search Page'
            className='outline-none bg-transparent'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearch}
          />
          <SearchIcon className="" />
        </div>
      </div>

      <div className="flex items-center">
        <NavButton
          title="Cart"
          icon={<ShoppingCartIcon />}
          customFunc={() => handleClick('cart')}
        />
        <NavButton
          title="Chat"
          icon={<ChatBubbleIcon />}
          customFunc={() => handleClick('chat')}
        />
        <NavButton
          title="Notifications"
          icon={<NotificationsNoneIcon />}
          customFunc={() => handleClick('notification')}
        />
        <Avatar
          alt="Remy Sharp"
          style={{ width: "30px", height: "30px" }}
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
