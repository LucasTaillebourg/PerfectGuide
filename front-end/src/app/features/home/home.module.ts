import {NgModule} from '@angular/core';
import {HomeRoutingModule} from 'src/app/features/home/home-routing.module';
import {HomeComponent} from 'src/app/features/home/home.component';
import {HomeStore} from 'src/app/features/home/home.store';

@NgModule({
  imports: [HomeRoutingModule], //imports de modules
  providers: [HomeStore], //Store / Services
  declarations: [HomeComponent], //component
  entryComponents: [] //popin
})
export class HomeModule {}
