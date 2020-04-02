import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHumanService } from './super-human.service';

@Component({
  selector: 'app-super-human',
  templateUrl: './super-human.component.html',
  styleUrls: ['./super-human.component.css']
})
export class SuperHumanComponent implements OnInit {

  constructor(private router: Router,
              private superHumanServic: SuperHumanService
             ) { }

  ngOnInit(): void {
  }

  addHero(): void {
    this.router.navigateByUrl('/register-super-human');
  }
}
