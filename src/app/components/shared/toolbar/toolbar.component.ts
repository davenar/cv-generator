import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CVModel } from 'src/app/contracts/cv-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  version: string = "v1.0";
  @Input() cv: CVModel | undefined;

  @Output() cvLoaded: EventEmitter<CVModel> = new EventEmitter();


  downloadJSON(json: any): void {
    const jsonString = JSON.stringify(json, null, 2);
    console.log(`download: ${jsonString}`);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.cv?.firstName ? `${this.cv.firstName}_` : ''}${this.cv?.lastName ? `${this.cv.lastName}_` : ''}cv.json`;
    a.click();

    // Clean up the URL object
    window.URL.revokeObjectURL(url);
  }

  onImportCV(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('File selezionato:', file);
      const allowedTypes = ['application/json'];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const jsonText = e?.target?.result as string;
            this.cv = JSON.parse(jsonText) as CVModel;
            console.log('File JSON caricato con successo:', this.cv);

            //this.cv.photo = ''; // TODO: gestire salvataggio immagine
            this.cvLoaded.emit(this.cv);

          } catch (error) {
            console.error('Errore durante il caricamento del file JSON:', error);
          }
        };
        reader.readAsText(file);
      }
      else {
        // Tipo di file non valido, mostra un messaggio all'utente.
        alert('Tipo di file non supportato. Scegli un file JSON.');
      }
    }
  }

  printCV() {
    window.print();
  }
}
