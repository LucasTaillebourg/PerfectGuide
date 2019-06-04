import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from 'src/app/features/home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
