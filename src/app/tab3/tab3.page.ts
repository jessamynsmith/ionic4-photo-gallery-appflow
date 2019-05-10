import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private fileData: Blob;
  private fileName: string;
  
  constructor(private apiService: ApiService, private fileService: FileService) {
    this.fileName = 'pocono.zip';
  }
  
  getData() {
    this.apiService.getZip(this.fileName).subscribe((response) => {
      console.log(response);
      this.fileData = response;
    });
  }
  
  saveFile() {
      this.fileService.saveFile(this.fileName, this.fileData);
  }
  
}
