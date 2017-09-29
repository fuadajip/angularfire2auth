import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MembersComponent} from '../members/members.component';
export const router: Routes = [
    { path : '', component: HomeComponent},
    { path : 'login', component: LoginComponent},
    { path : 'signup', component: SignupComponent},
    { path: 'member', component: MembersComponent}
];


export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
