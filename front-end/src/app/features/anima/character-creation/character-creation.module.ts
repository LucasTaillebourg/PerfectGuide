import {NgModule} from '@angular/core';
import {CharacterCreationRoutingModule} from './character-creation-routing.module';
import {CharacterCreationComponent} from './character-creation.component';
import {CharacterCreationStore} from './character-creation.store';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [CharacterCreationRoutingModule, SharedModule], //imports de modules
  providers: [CharacterCreationStore], //Store / Services
  declarations: [CharacterCreationComponent], //component
  entryComponents: [] //popin
})
export class CharacterCreationModule {}
