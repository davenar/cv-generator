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
    education: [],
    skills: [],
    certifications: [],
    spokenLanguages: [],
    address: {},
    socialAccounts: {},
    showPrivacyInfo: true,
  };

  constructor() { }


  ngOnInit(): void {
  }

  // onImageSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const allowedTypes = ['image/jpeg', 'image/png'];
  //     if (allowedTypes.includes(file.type)) {
  //       const imageFile: File = event.target.files[0];
  //       const imgUrl = this.getObjectURL(imageFile);
  //       console.log(imgUrl);
  //       this.cv.photo = imgUrl;
  //     }
  //     else {
  //       // Tipo di file non valido, mostra un messaggio all'utente.
  //       alert('Tipo di file non supportato. Scegli un file PNG o JPG.');
  //     }
  //   }
  // }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const base64Image = e.target.result;
          this.cv.photo = base64Image;
        };

        reader.readAsDataURL(file);
      } else {
        // Tipo di file non valido, mostra un messaggio all'utente.
        alert('Tipo di file non supportato. Scegli un file PNG o JPG.');
      }
    }
  }

  getObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }

  handleCVLoaded(cv: CVModel) {
    this.cv = cv;
  }

  ngOnDestroy() {
    // if (this.selectedImage) {
    //   URL.revokeObjectURL(this.getObjectURL(this.selectedImage));
    // }
  }
}
