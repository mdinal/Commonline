import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrakingService {

  constructor(private httpClient: HttpClient) { }


  getDetails(ids:any,passcode:any) {
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    });
    let params = new HttpParams();
    params = params.append("trackingIds",ids);
    params = params.append("passcode",passcode);
    const options = {
      headers: httpHeaders,
      params:params,
    };
    let url = "https://72i8t1e1sb.execute-api.ap-south-1.amazonaws.com/public/790/items/dto";
    return this.httpClient.get(url,options);
  }
}
