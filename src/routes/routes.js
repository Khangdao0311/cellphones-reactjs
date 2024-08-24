import config from '~/config/';
import SmallLayout from '~/layouts/SmallLayout';
import Home from '~/pages/Home';
import Smember from '~/pages/Smember';
import Login from '~/pages/Login';
import Register from '~/pages/Register';    
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.smember, component: Smember },
    { path: config.routes.login, component: Login, layout: SmallLayout },
    { path: config.routes.register, component: Register, layout: SmallLayout },
    { path: config.routes.cart, component: Cart, layout: SmallLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
