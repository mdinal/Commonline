import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrakingService {

  constructor(private httpClient: HttpClient) { }


  getDetails() {
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    });


    const options = {
      headers: httpHeaders,
    };
    let url = "https://72i8t1e1sb.execute-api.ap-south-1.amazonaws.com/public/790/items/dto?trackingId=34190035154&passcode=4694";
    return this.httpClient.get(url,options);
  }
}
