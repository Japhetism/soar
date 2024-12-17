import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  route: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, route, icon: Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === route;

  const textColor = isActive ? 'text-[#232323]' : 'text-[#B1B1B1]';
  const iconColor = isActive ? '#232323' : '#B1B1B1';

  return (
    <Link
      to={route}
      className={`flex items-center p-3 hover:bg-gray-200 rounded cursor-pointer ${textColor}`}
    >
      <span className={`mr-4 ${textColor}`}>
        <Icon color={iconColor} />
      </span>
      <span className={`text-lg font-medium font-inter ${textColor}`}>{label}</span>
    </Link>
  );
};
