import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dasboard/dashboard.component'),
    children:[
        {
            path: 'change-detection',
            title: 'Change Detection',
            loadComponent: () =>import('./dasboard/page/change-detection/change-detection.component'),
        },
        {
            path: 'control-flow',
            title: 'Control Flow',
            loadComponent: () =>import('./dasboard/page/control-flow/control-flow.component'),
        },
        {
            path: 'defer-option',
            title: 'Defe Option',
            loadComponent: () =>import('./dasboard/page/defer-option/defer-option.component'),
        },
        {
            path: 'defer-views',
            title: 'Defer Views',
            loadComponent: () =>import('./dasboard/page/defer-views/defer-views.component'),
        },
        {
            path: 'user/:id',
            title: 'User View',
            loadComponent: () =>import('./dasboard/page/user/user.component'),
        },
        {
            path: 'user-list',
            title: 'User List',
            loadComponent: () =>import('./dasboard/page/users/users.component'),
        },
        {
            path: 'view-transition-1',
            title: 'View Transition-1',
            loadComponent: () =>import('./dasboard/page/view-transition/view-transition1.component'),
        },
        {
            path: 'view-transition-2',
            title: 'View Transition-2',
            loadComponent: () =>import('./dasboard/page/view-transition/view-transition2.component'),
        },
        {
            path: '',
            redirectTo: 'control-flow',
            pathMatch : 'full'
            
        }

    ]
    },
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch: 'full'
    }
];
