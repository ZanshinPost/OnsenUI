import {
  Component,
  OnsSelect,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '../src/angular2-onsenui';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Select Example</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <div style="margin: 10px">
        <p>Choose which select input you want to see:<p>
        <ons-select id="choose-sel" [(ngModel)]="selectedModifier" ngDefaultControl (ngModelChange)="editSelects($event)">
          <option *ngFor="let modifier of modifiers" [value]="modifier.value">
            {{ modifier.label }}
          </option>
        </ons-select>
        <p>Modifier <strong>{{ selectedModifier }}</strong> looks great.</p>
      </div>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  selectedModifier: string = 'basic';
  modifiers = [
    {value: 'basic', label: 'Basic'},
    {value: 'material', label: 'Material'},
    {value: 'underbar', label: 'Underbar'}
  ];

  constructor() { }

  editSelects(event) {
    document.getElementById('choose-sel').removeAttribute('modifier');
    if (event == 'material' || event == 'underbar') {
      document.getElementById('choose-sel').setAttribute('modifier', event);
    }
  }
}

@NgModule({
  imports: [OnsenModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
