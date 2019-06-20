import {NgModule} from '@angular/core';
import {MobxAngularModule} from 'mobx-angular';
import {CharacterCreationRoutingModule} from 'src/app/features/character-creation/character-creation-routing.module';
import {CharacterCreationComponent} from 'src/app/features/character-creation/character-creation.component';
import {CharacterCreationStore} from 'src/app/features/character-creation/character-creation.store';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [CharacterCreationRoutingModule, SharedModule], //imports de modules
  providers: [CharacterCreationStore], //Store / Services
  declarations: [CharacterCreationComponent], //component
  entryComponents: [] //popin
})
export class CharacterCreationModule {}
