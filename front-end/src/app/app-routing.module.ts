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
  // {
  //   path: 'localiser',
  //   component: PartenairesComponent
  // },
  {
    path: 'anima',
    loadChildren: './features/anima/anima.module#AnimaModule'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
