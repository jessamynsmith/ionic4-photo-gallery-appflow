import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private file: File) {}
  
  public saveFile(filename: string, data: Blob): void {
      const filePath = this.file.dataDirectory;
      if (filePath) {
          // TODO how to create directory?
          // filePath += 'guidebooks' + '/';
          console.log(filePath);
            
          this.file.writeFile(filePath, filename, data).then(_ => {
              console.log('Wrote file', filePath, filename, _);
          }).catch(err => {
              console.log('Write file failed:', err);
          });
        
      }
    
  }
  
}
