import React from 'react';
import { BiBarChartSquare, BiChart, BiMessageSquareDetail, BiCog } from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Explore',
        path: '/',
        icon: <BiBarChartSquare />,
        cName: 'nav-text'
    },
    {
        title: 'Snippets',
        path: '/',
        icon: <BiChart />,
        cName: 'nav-text'
    },   
    {
        title: 'Reports',
        path: '/',
        icon: <BiMessageSquareDetail />,
        cName: 'nav-text'
    },   
    {
        title: 'Settings',
        path: '/',
        icon: <BiCog />,
        cName: 'nav-text'
    },
]