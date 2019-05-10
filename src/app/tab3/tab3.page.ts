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
  private items: any;
  
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
      this.fileService.saveAndUnzipFile(this.fileName, this.fileData);
  }
  
  showData() {
    const baseFilename = this.fileName.replace('.zip', '');
    
    const dataPromise = this.fileService.getDataFromLocalFile(baseFilename, 'guidebook.json');
    if (dataPromise) {
      dataPromise.then(data => {
        console.log('Read file data');
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        this.items = parsedData.areas;
      }).catch((error) => {
        console.log('Error retrieving data:', error);
      });
    }
  }
  
}
