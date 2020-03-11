import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // canActivate: [FeaturesGuard, CguGuard],
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'anima',
    loadChildren: './features/anima/anima.module#AnimaModule'
  },
  {
    path: 'gotc',
    loadChildren: './features/gotc/gotc.module#GotcModule'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
