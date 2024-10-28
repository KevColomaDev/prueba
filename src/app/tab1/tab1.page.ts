import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ItemReorderEventDetail, OverlayEventDetail } from '@ionic/core';
import { addIcons } from 'ionicons';
import { close, closeCircle, pin} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal?: IonModal;

  message?: string;
  name?: string;

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

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    // Aquí puedes manejar cualquier lógica que necesites al cerrar el modal
    console.log('Modal will dismiss', event);
  }

  // Método para cancelar y cerrar el modal
  cancel() {
    if (this.modal) {
      this.modal.dismiss(null, 'cancel');
    }
  }

  // Método para confirmar y manejar la entrada del usuario
  confirm() {
    if (this.modal) {
      this.message = `Hola, ${this.name}!, que te trae por aqui?`;
      this.modal.dismiss(this.name, 'confirm');
    }
  }
  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
}
