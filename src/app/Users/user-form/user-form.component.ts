import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService) {
    let companyForm = new FormGroup({
      name: new FormControl(""),
      catchPhrase: new FormControl(""),
      bs: new FormControl(""),
    });
    // let addressForm = new FormGroup({

    // });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl(''),
      email: new FormControl('', Validators.required),
      phone: new FormControl(''),
      website: new FormControl(''),
      company: companyForm,
      // address: addressForm,
    })
  }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.form.value)
    if(this.form.valid){
      this.userService.createUser(this.form.value)
      .subscribe(resp=>console.log(resp));
    }
  }

}
