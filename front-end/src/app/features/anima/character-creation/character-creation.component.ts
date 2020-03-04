import {Component, OnInit} from '@angular/core';
import {CharacterType} from 'src/app/shared/models';
import {Subscriptor} from 'src/app/shared/util';
import {CharacterCreationStore} from './character-creation.store';

@Component({
  selector: 'anima-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {

  private _subcribtor: Subscriptor = new Subscriptor();

  constructor(private characterCreationStore: CharacterCreationStore) {}

  ngOnInit() {
    this._subcribtor.trigger(this.characterCreationStore.fetchType());
  }

  get types(): CharacterType[] {
    return this.characterCreationStore.types;
  }

}
