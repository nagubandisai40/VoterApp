import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from 'src/app/services/backend-connect.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: BackendConnectService, private router: Router, private fb: FormBuilder,
    private customValidator: ValidationService,private spinner:NgxSpinnerService) { }

  registerForm: FormGroup;
  submitted = false;


  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeat_password: string;
  userName: string;
  errorMessage: string;
  showE: boolean;

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  register() {
    if (this.password != this.repeat_password) {
      this.errorMessage = "Password doesn't Match";
      this.showE = true;
      return;
    }
    // if (this.registerForm.valid) {
    this.spinner.show();
    this.service.register(this.firstName + ' ' + this.lastName, this.email, this.password, this.userName, this.repeat_password).subscribe(res => {
        // console.log(res)
        this.spinner.hide();
        this.router.navigate(['/login'])
      }, error => {
        this.spinner.hide();
        console.log(error);
      })
    }
  // }

}
