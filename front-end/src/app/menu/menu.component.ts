import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'anima-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get characterCreationLink():string{
    return '/characterCreation';
  }
}
