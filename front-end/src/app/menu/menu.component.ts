import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'anima-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  // TODO Faire un tableau qui contient des objets {nom / lien} et generer les morceaux du menu à partiur de ca

  goToCharacterCreation() {
    this._router.navigate(['/characterCreation']);
  }

  goToHome() {
    this._router.navigate(['/home']);
  }

  get histoireName() {
    return 'Histoire';
  }

  get characterName() {
    return 'Character Creation';
  }

  get homeName() {
    return 'Home';
  }

  get reglesName() {
    return 'Règles';
  }

  get logoName() {
    return 'LOGO';
  }

}
