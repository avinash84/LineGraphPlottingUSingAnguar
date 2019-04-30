import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// import { HelperService } from './helper.service';
// Import RxJs required methods
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
 

   }
   getJson(): Observable<any> {
     const url='http://data.consumerfinance.gov/api/views.json';
    return this.getApiResponse(url);
   }




getApiResponse(url: string): Observable<any> {
 return this.http.get(url);
}




}
