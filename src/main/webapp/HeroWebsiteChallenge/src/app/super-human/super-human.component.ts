import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHumanService } from './super-human.service';
import { Hero } from '../hero-class';

@Component({
  selector: 'app-super-human',
  templateUrl: './super-human.component.html',
  styleUrls: ['./super-human.component.css']
})
export class SuperHumanComponent implements OnInit {

  constructor(private router: Router,
              private shs: SuperHumanService
             ) { }

  ngOnInit(): void {
    this.shs.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  heroes: Hero[];
  addHero(): void {
    this.router.navigateByUrl('/register-super-human');
  }
}
