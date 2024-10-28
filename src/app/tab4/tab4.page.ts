import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  texto: string = '';
  constructor() {}

  // Function to save the text to a file
  saveText() {
    if (this.texto.trim().length === 0) {
      return;
    }
    // Save the text to the file
    Filesystem.writeFile({
      path: 'Prueba.txt',
      data: this.texto,
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    }).then(() => {
      alert('Texto guardado');
      this.texto = '';
    }).catch(() => {
      alert('Error al guardar el texto');
    });
  }
}
