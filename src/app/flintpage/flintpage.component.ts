import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-flintpage',
  templateUrl: './flintpage.component.html',
  styleUrls: ['./flintpage.component.css']
})
export class FlintpageComponent implements OnInit {

  flintFormGroup: FormGroup;
  getFlintValue: any
  constructor(private formBuilder: FormBuilder, private service: ApiServiceService) { }

  ngOnInit() {

    this.flintFormGroup = this.formBuilder.group({
      flintId: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  saveFlint() {
    // this.flintFormGroup.value.flintId = this.flintFormGroup.value;
    this.service.saveFlint(this.flintFormGroup.value).subscribe(res => {
      console.log(res);
    },
      error => {
        console.log("Error Occurred")
      });
  }


  getFlint() {
    this.service.getFlints().subscribe(res => {
      this.getFlintValue = res;
      console.log(res);
    },
      error => {
        console.log("Can fetch hacked Account")

      });


  }
}
