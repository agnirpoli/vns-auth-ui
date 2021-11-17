import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient:HttpClient) { }


  generateToken(data:any){
    return this.httpClient.post("",data);
  }
}
