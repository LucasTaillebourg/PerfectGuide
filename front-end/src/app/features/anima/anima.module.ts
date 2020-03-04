import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import { AnimaComponent } from './anima.component';
import { AnimaStore } from './anima.store';
import { AnimaRoutingModule } from './anima.routing.module';

@NgModule({
  imports: [AnimaRoutingModule, SharedModule], //imports de modules
  providers: [AnimaStore], //Store / Services
  declarations: [AnimaComponent], //component
  entryComponents: [] //popin
})
export class AnimaModule {}
