import { RouteProps } from 'react-router';
import { Index } from '../components/index';
import { Experience } from '../components/experience';

interface RouteAdditionalProps {
    heading?: string;
    bold?: boolean;
    path: string;
} 

type Route = RouteProps & RouteAdditionalProps;

export const routes: Route[] = [
    {
        path: '/',
        component: Index,
        exact: true,
        heading: 'Alexander Edwards',
        bold: true
    },
    {
        path: '/experience',
        component: Experience,
        heading: 'Experience',
    },
]