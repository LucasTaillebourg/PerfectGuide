import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AnimaComponent } from './anima.component';


export const routes: Routes = [
  {
    path: '',
    component: AnimaComponent
  }
];

export const AnimaRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
