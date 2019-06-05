import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'anima-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryComponent {
  @Output()
  click = new EventEmitter();

  @Input()
  name: string;

  /**
   * Fonction appelée au clic sur le lien
   */
  onClick(): void {
    this.click.emit();
  }
}
