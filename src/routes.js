import {MessengerContainer} from 'containers/MessengerContainer';
import {Profile} from 'pages/Profile';
import {NotFound} from 'pages/NotFound';

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    },
    {
        path: '/chats/:id',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '*',
        exact: false,
        component: NotFound
    },
];
