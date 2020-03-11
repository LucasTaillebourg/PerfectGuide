import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { GotcComponent } from './gtoc.component';


export const routes: Routes = [
  {
    path: '',
    component: GotcComponent
  }
];

export const GotcRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
