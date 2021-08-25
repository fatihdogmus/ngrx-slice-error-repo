import { KullaniciActions } from './store/kullanici-slice';
import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-slice-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-slice-test';

  constructor() {
    console.log(KullaniciActions);
  }
}
