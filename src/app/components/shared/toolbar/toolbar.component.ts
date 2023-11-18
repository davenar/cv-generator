import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CVModel } from 'src/app/contracts/cv-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  version: string = "v1.0.1";
  isDarkMode: boolean = false;
  @Input() cv: CVModel | undefined;
  @Output() cvLoaded: EventEmitter<CVModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.checkTheme();
  }


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
    window.addEventListener("beforeprint", (event) => {
      alert("Per un risultato di stampa ottimale si consiglia di abilitare la Grafica in Background e di settare i margini su \"Nessuno\"");
    });
    window.print();
  }

  // Metodo per attivare o disattivare il tema dark
  toggleTheme() {
    const htmlElement = document.querySelector('html');
    const theme = htmlElement?.getAttribute('data-bs-theme');

    if (theme === 'dark') {
      htmlElement?.removeAttribute('data-bs-theme');
      this.isDarkMode = false;
    } else {
      htmlElement?.setAttribute('data-bs-theme', 'dark');
      this.isDarkMode = true;
    }
    this.checkTheme();
  }

  checkTheme() {
    const htmlElement = document.querySelector('html');
    const theme = htmlElement?.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      this.isDarkMode = true;
    }
    else {
      this.isDarkMode = false;
    }
  }


}
