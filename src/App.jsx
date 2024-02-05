import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import Error from './ui/Error';

import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';
import { loader as imagesLoader } from './ui/Home';
import { action as createOrderAction } from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Reviews from './features/reviews/Reviews';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: imagesLoader,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },

      {
        path: '/reviews',
        element: <Reviews />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
