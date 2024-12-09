import { Routes } from '@angular/router';
import { MayaraPetsComponent } from './mayara-pets/mayara-pets.component';

export const routes: Routes = [
    {path:"pets",title:"Liste des animaux",component:MayaraPetsComponent},
    {path:"",pathMatch:"full",redirectTo:"/pets"}


];
