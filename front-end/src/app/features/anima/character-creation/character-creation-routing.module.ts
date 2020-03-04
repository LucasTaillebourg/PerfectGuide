import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterCreationComponent} from 'src/app/features/character-creation/character-creation.component';


export const routes: Routes = [
  {
    path: '',
    component: CharacterCreationComponent
  }
];

export const CharacterCreationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
