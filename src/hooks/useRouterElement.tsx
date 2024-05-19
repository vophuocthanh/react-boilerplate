import { useRoutes } from 'react-router-dom';
import LayoutMain from '@/layouts/LayoutMain';
import Home from '@/pages/home';
import { UserPage } from '@/pages/users/user.page';
import UserDetail from '@/pages/users/user-detail';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';

export default function useRoutesElements() {
  const routeElements = useRoutes([
    { path: '/', element: <LayoutMain children={<Home />} /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/users', element: <LayoutMain children={<UserPage />} /> },
    { path: '/users/:id', element: <LayoutMain children={<UserDetail />} /> },
    // {
    //   path: '/users/create',
    //   element: <LayoutMain children={<UserCreate />} />,
    // },
    { path: '*', element: <h1>404</h1> },
  ]);
  return routeElements;
}
