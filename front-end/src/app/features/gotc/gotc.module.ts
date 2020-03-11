import { GotcComponent } from './gtoc.component';
import { GotcStore } from './gotc.store';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import { GotcRoutingModule } from './gotc.routing.module';

@NgModule({
  imports: [GotcRoutingModule, SharedModule], //imports de modules
  providers: [GotcStore], //Store / Services
  declarations: [GotcComponent], //component
  entryComponents: [] //popin
})
export class GotcModule {}
