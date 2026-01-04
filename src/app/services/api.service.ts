import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'https://helloapi-freeazuredemo-eqetdtdegvdac7e6.canadacentral-01.azurewebsites.net/api/hello';
  constructor(private http: HttpClient) { }

  
  getMessage(): Observable<string> {
    
    return this.http.get(this.apiUrl,{ responseType: 'text'});
  }
}
