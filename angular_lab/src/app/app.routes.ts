import { Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { EditComponent } from './employee/edit/edit.component';

export const routes: Routes = [
    {path: 'employee', component: HomeComponent},
    {path: 'employee', redirectTo: 'employee', pathMatch: 'full'},
    {path: '', redirectTo: 'employee', pathMatch: 'full'},
    {path: 'employee/edit/:id', component: EditComponent}
];
