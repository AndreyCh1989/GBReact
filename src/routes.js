import {MessengerContainer} from 'containers/MessengerContainer';
import {ProfileContainer} from 'containers/ProfileContainer';
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
        component: ProfileContainer
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
