import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home/Home';
import Loading from '../components/Loading/Loading';
import Courses from '../pages/Courses/Courses/Courses';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Admission from '../pages/Admission/Admission';
import About from '../pages/About/About';
import Webinar from '../pages/Webinar/Webinar';
import SuccessStories from '../pages/SuccessStories/SuccessStories';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        HydrateFallback: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/courses',
                Component: Courses,
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
                path: '/*',
                Component: ErrorPage
            },
        ]
    }
])

export default router;