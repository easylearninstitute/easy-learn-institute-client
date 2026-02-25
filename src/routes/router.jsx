import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home/Home';
import Loading from '../components/Loading/Loading';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Admission from '../pages/Admission/Admission';
import About from '../pages/About/About';
import Webinar from '../pages/Webinar/Webinar';
import SuccessStories from '../pages/SuccessStories/SuccessStories';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Programs from '../pages/Programs/Programs';
import ProgramDetails from '../pages/ProgramDetails/ProgramDetails';
import AllPrograms from '../components/AllPrograms/AllPrograms';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        HydrateFallback: Loading,
        children: [
            {
                index: true,
                loader: () => fetch('/programs.json'),
                Component: Home
            },
            {
                path: '/programs',
                loader: () => fetch('/programs.json'),
                Component: AllPrograms
            },
            {
                path: '/programDetails/:id',
                loader: () => fetch(`/programs.json`),
                element: <ProgramDetails></ProgramDetails>
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/admission',
                Component: Admission,
            },
            {
                path: '/webinar',
                Component: Webinar,
            },
            {
                path: '/success-stories',
                Component: SuccessStories,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/*',
                Component: ErrorPage
            },
        ]
    },

])

export default router;