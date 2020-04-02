import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterSuperHumanService } from './register-super-human.service';

@Component({
  selector: 'app-register-super-human',
  templateUrl: './register-super-human.component.html',
  styleUrls: ['./register-super-human.component.css']
})
export class RegisterSuperHumanComponent implements OnInit {

  // constructor(){}
  constructor(//private formGroup: FormGroup,
              private rshs: RegisterSuperHumanService
              ) { }

  ngOnInit(): void {
  }

  // newHeroForm = new FormGroup({
  //   firstname: new FormControl(),
  //   lastname: new FormControl(),
  //   alias: new FormControl()
  // });

  // registerHero() {
  //   this.rshs.putHero(this.newHeroForm.get('firstnameId').value,
  //                     this.newHeroForm.get('lastnameId').value,
  //                     this.newHeroForm.get('aliasId').value);
                      
  //   console.log(this.newHeroForm.get('firstnameId').value);
  //   console.log(this.newHeroForm.get('lastnameId').value);
  //   console.log(this.newHeroForm.get('aliasId').value);
  //   }
}
