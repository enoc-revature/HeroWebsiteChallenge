import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterSuperHumanService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/HeroWebsiteChallenge/register-super-human/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  putHero(first: string, last: string, alias: string){

  }
}
