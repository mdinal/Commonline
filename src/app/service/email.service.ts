import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }


  sendMail(body:any) {
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    });

    const options = {
      headers: httpHeaders,
    };
    let url = "http://notificationservice.dreamworld.lk/public/emails";
    return this.httpClient.post(url,body,options);
  }
}
