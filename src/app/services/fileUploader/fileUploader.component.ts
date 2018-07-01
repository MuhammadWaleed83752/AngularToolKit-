import { Component} from '@angular/core';

import { FileUploadService } from './fileUploadService';

@Component({
  selector: 'app-fileuploder',
  templateUrl: './fileUploader.component.html',
  // styleUrls: [``]
})

export class FileUploadComponent {


    constructor(private fileUploadService: FileUploadService) {}
    fileToUpload: File = null;


// _____________________FileUploader Code Starts____________________

    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    console.log('called');
    console.log(this.fileToUpload);
    // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //   // do something, if upload success
    //   }, error => {
    //     console.log(error);
    //   });
  }
  // _______________FileUploader Code Ends______________
  }
