import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
// import { HttpClient } from '@angular/common/http';
@Injectable()

export class FileUploadService {

constructor() {}

  postFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    // Now post the formData to post body
}
}
