import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {Observable} from 'rxjs';
import {CharacterType} from 'src/app/shared/models';
import {bindAction} from 'src/app/shared/util/bind-action';

@Injectable()
export class CharacterCreationStore {

  @observable
  types: CharacterType[] = [];

  constructor(private _http: HttpClient) {}

  @action
  fetchType(): Observable<CharacterType[]> {
    return this._http
      .get<CharacterType[]>('/characterType')
      .pipe(bindAction((resp: CharacterType[]) => (this.types = resp)));
  }
}
