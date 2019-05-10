import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = '<YOUR_URL_HERE>';

  constructor(private httpClient: HttpClient) { }

  public getZip(filename): Observable<Blob> {
    console.log('Getting file');
    return this.httpClient
      .get(`${this.API_URL}/${filename}`, {
        responseType: 'blob'
      });
  }
}
