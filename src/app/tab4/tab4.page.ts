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
  async saveText() {
    if (this.texto.trim().length === 0) {
      return;
    }

    try {
      // Crear una carpeta llamada 'miCarpeta'
      await Filesystem.mkdir({
        path: 'miCarpeta',
        directory: Directory.Documents,
        recursive: true // Permite crear carpetas anidadas
      });

      // Guardar el texto en el archivo dentro de la carpeta
      await Filesystem.writeFile({
        path: 'miCarpeta/prueba.txt', // Ruta del archivo dentro de la carpeta
        data: this.texto,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });

      alert('Texto guardado en miCarpeta/prueba.txt');
      this.texto = '';
    } catch (err) {
      console.log(err);
      alert('Error al guardar el texto: ' + err);
    }
  }
}