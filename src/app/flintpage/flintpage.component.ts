import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flintpage',
  templateUrl: './flintpage.component.html',
  styleUrls: ['./flintpage.component.css']
})
export class FlintpageComponent implements OnInit {

  flintFormGroup: FormGroup;
  submitted: boolean;

  constructor(private router: Router, private service: ApiServiceService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {


    this.flintFormGroup = this.fb.group({
      id: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email]],




    });

  }


  saveFlint(): any {
    this.submitted = true;
    // if (this.flintFormGroup.invalid) {
    //   this.toastr.warning('Empty Form cannot be submitted!', 'ERROR!');

    //   return;
    // }

    this.service.saveFlint(this.flintFormGroup.value).subscribe(res => {
      console.log(res)
      this.flintFormGroup.reset();

      this.toastr.success('Login Seccessful!', 'Redirecting...!');
      
      window.location.reload();
      this.submitted = false;
    },
      error => {
        this.submitted = false;
        this.toastr.error(error.status + ': ' + error.error.message, "Error!");
        console.log(error.error.message)
      });
  }


  fetchFlint() {
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
