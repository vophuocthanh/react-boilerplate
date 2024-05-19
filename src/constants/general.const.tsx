import IconDashboard from '../icon/IconDashboard';
import IconPerson from '../icon/IconPerson';
import { TSidebarLinks } from '../types/general.type';

export const sidebarLinks: TSidebarLinks[] = [
  {
    title: 'Dashboard',
    icon: <IconDashboard />,
    path: '/',
  },
  {
    title: 'Users',
    icon: <IconPerson />,
    path: '/users',
  },
];
