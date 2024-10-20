// import React from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import SettingsIcon from '@mui/icons-material/Settings';

// import { Ecommerce, Orders, Calendar, Stacked, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line, Employees, Customers } from './pages/Charts/index';
// import { Navbar, Sidebar } from "./components";
// import { useStateContext } from "./contexts/ContextProvider";

// const App = () => {
//   const { activeMenu } = useStateContext();

//   return (
//     <div className="flex flex-col relative dark:bg-main-dark-bg overflow-x-hidden">
//       {/* Settings Button */}
//       <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
//         <Tooltip title="Settings">
//           <IconButton
//             className="hover:bg-gray-100 text-white hover:drop-shadow-xl"
//             style={{ backgroundColor: 'blue', color: "#fff", borderRadius: '50%' }}
//           >
//             <SettingsIcon />
//           </IconButton>
//         </Tooltip>
//       </div>

//       {/* Sidebar */}
//       {activeMenu ? (
//         <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
//           <Sidebar />
//         </div>
//       ) : (
//         <div className="w-0">
//           <Sidebar />
//         </div>
//       )}

//       {/* Main Content */}
//       <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
//         <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
//           <Navbar />
//         </div>

//         {/* Routes */}
//         <div className="p-4">
//           <Routes>
//             {/* Dashboard */}
//             <Route path="/" element={<Ecommerce />} />
//             <Route path="/ecommerce" element={<Ecommerce />} />

//             {/* Pages */}
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/employees" element={<Employees />} />

//             {/* Apps */}
//             <Route path="/kanban" element={<Kanban />} />
//             <Route path="/editor" element={<Editor />} />
//             <Route path="/calendar" element={<Calendar />} />
//             <Route path="/color-picker" element={<ColorPicker />} />
//             <Route path="/customers" element={<Customers />} />

//             {/* Charts */}
//             <Route path="/area" element={<Area />} />
//             <Route path="/bar" element={<Bar />} />
//             <Route path="/pie" element={<Pie />} />
//             <Route path="/financial" element={<Financial />} />
//             <Route path="/color-mapping" element={<ColorMapping />} />
//             <Route path="/stacked" element={<Stacked />} />
//             <Route path="/line" element={<Line />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SettingsIcon from '@mui/icons-material/Settings';

import { Ecommerce, Orders, Calendar, Stacked, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line, Employees, Customers } from './pages/Charts/index';
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {/* Settings Button */}
      <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <Tooltip title="Settings">
          <IconButton
            className="hover:bg-gray-100 text-white hover:drop-shadow-xl"
            style={{ backgroundColor: 'blue', color: "#fff", borderRadius: '50%' }}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </div>

      {/* Sidebar */}
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full 
        ${activeMenu ? 'md:ml-72' : 'flex-2'} transition-all duration-300 ease-in-out`}>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>

        {/* Routes */}
        <div className="p-4">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* Pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />

            {/* Apps */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            <Route path="/customers" element={<Customers />} />

            {/* Charts */}
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/stacked" element={<Stacked />} />
            <Route path="/line" element={<Line />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
