import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { dataresult } from './data';
@Injectable({
  providedIn: 'root'
})
export class TestapiService {
  apiurl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }
   public getdata():Observable<dataresult[]> {

   return  this.http.get<dataresult[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
