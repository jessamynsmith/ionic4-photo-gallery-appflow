import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Zip } from '@ionic-native/zip/ngx';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private file: File, private zip: Zip) {}
  
  public unzipFile(sourceZip: string): void {
      const filePath = this.file.dataDirectory;
      if (filePath) {
          // TODO how to create directory?
          // filePath += 'guidebooks' + '/';
          console.log(filePath);

          this.zip.unzip(sourceZip, filePath,
              (progress) => {
                console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%');
              })
              .then((result) => {
                  if (result === 0) {
                      console.log('Unzipped', sourceZip, 'to', filePath);
                  }
                  if (result === -1) {
                      console.log('Unzip failed for', sourceZip);
                  }
              });
      }
  }
  
  public saveAndUnzipFile(filename: string, data: Blob): void {
      const filePath = this.file.dataDirectory;
      if (filePath) {
          // TODO how to create directory?
          // filePath += 'guidebooks' + '/';
          console.log(filePath);
          
          this.file.writeFile(filePath, filename, data, {replace: true}).then(fileEntry => {
              console.log('Wrote file', filePath, filename, fileEntry);
              this.unzipFile(fileEntry.nativeURL);
          }).catch(err => {
              console.log('Write file failed:', err);
          });
      }
  }
  
}
