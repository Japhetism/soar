import React, { useState } from 'react';
import { MenuItem } from './menuItem';
import { MenuProps, menus } from './menus';
import TASK_SVG from '../../assets/icons/task';
import HAMBURGER_SVG from '../../assets/icons/hamburger';

const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`lg:w-[250px] w-0 h-screen bg-white shadow-lg flex flex-col justify-start items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'w-[250px]' : 'w-0'
        }`}
      >
        <div className="flex items-center justify-between w-full p-6 text-2xl font-bold text-black mb-2">
          <div className="flex items-center space-x-2">
            <TASK_SVG />
            <span className="text-[#343C6A] text-[25px] font-extrabold font-inter">Soar Task</span>
          </div>
        </div>

        <div className="lg:px-8 items-center space-y-4 flex-grow w-full overflow-y-auto">
          {menus.map((menu: MenuProps) => (
            <MenuItem key={menu.route} label={menu.label} route={menu.route} icon={menu.icon} />
          ))}
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-10 left-4 z-50 p-2"
      >
        <HAMBURGER_SVG />
      </button>
      <div
        className={`lg:hidden lg:w-[250px] lg:h-screen lg:bg-white lg:shadow-lg lg:flex lg:flex-col lg:justify-start lg:items-center lg:transition-all lg:duration-300 lg:ease-in-out
        ${isMenuOpen ? 'w-full h-auto bg-white shadow-lg fixed top-16 left-4 z-40 opacity-100 visible' : 'lg:w-[250px] w-0 opacity-0 invisible'}`}
      >
        <div className="space-y-2 flex-grow w-full overflow-y-auto">
          {menus.map((menu: MenuProps) => (
            <MenuItem key={menu.route} label={menu.label} route={menu.route} icon={menu.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
