import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flintpage',
  templateUrl: './flintpage.component.html',
  styleUrls: ['./flintpage.component.css']
})
export class FlintpageComponent implements OnInit {

  flintFormGroup: FormGroup;

  constructor(private router: Router, private service: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit() {


    this.flintFormGroup = this.fb.group({
      id: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email]],




    });

  }


  saveFlint() {
    this.service.saveFlint(this.flintFormGroup.value).subscribe(res => {
      this.flintFormGroup.reset();
      console.log(res);

    },
      error => {
        console.log("Error Occurred")
      });
  }


  getFlint() {
    this.service.getFlints().subscribe(res => {
      // this.getFlintValue = res;
      this.gotoUserList()
      console.log(res);
    },
      error => {
        console.log("Can fetch hacked Account")

      });


  }


  // getFlint() {
  //   this.service.save(this.user).subscribe(result => this.gotoUserList());
  // }

  gotoUserList() {
    this.router.navigate(['/flintlist']);
  }
}
