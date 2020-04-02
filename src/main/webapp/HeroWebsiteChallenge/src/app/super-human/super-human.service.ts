import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../hero-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHumanService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/HeroWebsiteChallenge/super-human';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getHeroes(): Observable <Hero[]>{
    console.log("getHeroes()");
    return this.http.get<Hero[]>(this.url);
  }
}
