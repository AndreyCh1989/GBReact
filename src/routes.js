import {MessengerPge} from 'pages/MessengerPge';
import {Profile} from 'pages/Profile';
import {NotFound} from 'pages/NotFound';

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerPge
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    },
    {
        path: '/chats/:id',
        exact: true,
        component: MessengerPge
    },
    {
        path: '*',
        exact: false,
        component: NotFound
    },
];
