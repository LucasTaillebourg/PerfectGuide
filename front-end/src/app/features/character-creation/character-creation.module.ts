import {NgModule} from '@angular/core';
import {CharacterCreationRoutingModule} from 'src/app/features/character-creation/character-creation-routing.module';
import {CharacterCreationComponent} from 'src/app/features/character-creation/character-creation.component';
import {CharacterCreationStore} from 'src/app/features/character-creation/character-creation.store';

@NgModule({
  imports: [CharacterCreationRoutingModule], //imports de modules
  providers: [CharacterCreationStore], //Store / Services
  declarations: [CharacterCreationComponent], //component
  entryComponents: [] //popin
})
export class CharacterCreationModule {}
