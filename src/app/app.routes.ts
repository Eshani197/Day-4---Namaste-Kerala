import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Districts } from './districts/districts';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'districts',
        component:Districts
    },
    {
        path:'contact',
        component:Contact
    }
];
