import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperHumanService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/HeroWebsiteChallenge/register-team/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

}
