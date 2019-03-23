import { RouteProps } from 'react-router';
import { Index } from '../components/index';
import { Experience } from '../components/experience/experience';
import { Projects } from '../components/projects/projects';

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
        path: '/experience/',
        component: Experience,
        heading: 'Experience',
    },
    {
        path: '/projects/',
        component: Projects,
        heading: 'Projects',
    },
    // {
    //     path: '/articles/',
    //     component: Experience,
    //     heading: 'Articles',
    // },
    // {
    //     path: '/contact/',
    //     component: Experience,
    //     heading: 'Contact',
    // },
]