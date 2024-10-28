import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { close, closeCircle, pin} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    addIcons({
      'close': close,
      'close-circle': closeCircle,
      'pin': pin
    });
  }
  openUrl(url: string) {
    window.open(url, '_blank');
  }

}
