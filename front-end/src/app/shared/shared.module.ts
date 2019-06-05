import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MobxAngularModule} from 'mobx-angular';
import {EntryComponent} from 'src/app/shared/entry/entry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MobxAngularModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule,
    EntryComponent
  ],
  declarations: [
    EntryComponent
  ]
})
export class SharedModule {}
