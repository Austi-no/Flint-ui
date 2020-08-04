import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flintlist',
  templateUrl: './flintlist.component.html',
  styleUrls: ['./flintlist.component.css']
})
export class FlintlistComponent implements OnInit {
  flintFormGroup: FormGroup;
  flintList: any = [];

  constructor(private router: Router, private service: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit() {

    this.getAllFlints();
    this.flintFormGroup = this.fb.group({
      id: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email]],




    });

  }

  getAllFlints(): any {

    this.service.getFlints()
      .subscribe(result => {
        this.flintList = result;
        console.log(result);
      },
        error => {
          console.log(error.error.message, "Error!");
        });
  }

  goback() {
    this.router.navigate(['/'])


  }


  gotoUserList() {
    this.router.navigate(['/']);

  }

  deleteflint(id: any) {
    this.service.deleteFlint(id).subscribe(res => {
      this.getAllFlints();
      console.log(res);
    })
  }

}






