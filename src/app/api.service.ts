import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseurl + 'restapp/', {headers : this.httpHeaders})
  }
  getOneProducts(id): Observable<any> {
    return this.http.get(this.baseurl + 'restapp/' + id , {headers : this.httpHeaders})
  }
  sendcontactdata(formdata): Observable<any> {
    return this.http.post(this.baseurl + 'restapp/contactus/' , formdata, {headers : this.httpHeaders})
  }
}
