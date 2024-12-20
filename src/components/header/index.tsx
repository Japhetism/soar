import UserImage from '../../assets/images/user.png';
import BELL_SVG from '../../assets/icons/bell';
import COG_SVG from '../../assets/icons/cog';
import SearchInput from '../searchInput';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getPathname = () => {
    if (pathname === "/" || pathname === "/dashboard") {
      return "Overview"
    }
    const trimPathname = pathname.replace(/^\/+/, '');
    return trimPathname.charAt(0).toUpperCase() + trimPathname.slice(1); 
  }

  return (
    <header className="flex justify-between items-center h-[100px] p-4 px-10 bg-[#FFF] text-white border-b-[1px]">
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <span className="text-[#343C6A] text-[28px] font-semibold font-inter">{getPathname()}</span>
      </div>
      
      <div className="flex items-center space-x-10">
        <div className="hidden md:flex">
          <SearchInput
            placeholder="Search for something"
            onSearch={() => {}}
          />
        </div>
        
        <div className="hidden md:flex space-x-4 items-center">
          <div className="bg-[#F5F7FA] w-[50px] h-[50px] rounded-full flex items-center justify-center">
            <COG_SVG />
          </div>
          <div className="bg-[#F5F7FA] w-[50px] h-[50px] rounded-full flex items-center justify-center">
            <BELL_SVG />
          </div>
        </div>
        
        <img src={UserImage} alt=" " className="w-[60px] h-[60px] rounded-full" />
      </div>
    </header>
  );
};

export default Header;
