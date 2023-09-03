import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CVModel } from 'src/app/contracts/cv-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  version: string = "v1.0";
  @Input() onImportCV!: Function;
  @Input() cv: CVModel | undefined;


  downloadJSON(json: any): void {
    const jsonString = JSON.stringify(json, null, 2);
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

  printCV() {
    // const printWindow = window.open('', '_blank');
    // const a4Div = document.querySelector('.a4-div') as HTMLElement;

    // if (printWindow) {
    //   printWindow.document.open();
    //   printWindow.document.write(`
    //     <html>
    //       <head>
    //         <title>Print</title>
    //         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    //       </head>
    //       <body>
    //         <div class="container mt-5">
    //           ${a4Div.innerHTML}
    //         </div>
    //       </body>
    //     </html>
    //   `);
    //   printWindow.document.close();
    //   printWindow.print();
    //   printWindow.close();
    // }
  }
}
