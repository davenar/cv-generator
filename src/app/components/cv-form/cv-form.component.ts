import { Component, OnDestroy, OnInit } from '@angular/core';
import { CVModel } from 'src/app/contracts/cv-model';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit, OnDestroy {
  cv: CVModel = {
    experience: [],
    skills: [],
    spokenLanguages: [],
    address: {}
  };

  constructor() { }


  ngOnInit(): void {
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (allowedTypes.includes(file.type)) {
        const imageFile: File = event.target.files[0];
        const imgUrl = this.getObjectURL(imageFile);
        console.log(imgUrl);
        this.cv.photo = imgUrl;
      }
      else {
        // Tipo di file non valido, mostra un messaggio all'utente.
        alert('Tipo di file non supportato. Scegli un file PNG o JPG.');
      }
    }
  }

  getObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }

  downloadJSON() {
    const jsonString = JSON.stringify(this.cv);
    console.log(`download: ${jsonString}`);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.json';
    a.click();

    // Clean up the URL object
    window.URL.revokeObjectURL(url);
  }

  pippo() {
    console.log("pippo");
    console.log(this.cv);
  }

  ngOnDestroy() {
    // if (this.selectedImage) {
    //   URL.revokeObjectURL(this.getObjectURL(this.selectedImage));
    // }
  }
}
