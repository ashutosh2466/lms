import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  responseMsg: string = '';

  constructor(private fb: FormBuilder, private api: ApiService,private router:Router) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.maxLength(15), Validators.minLength(8),]),

    })
  }
  login(){
    let loginInfo = {
      email: this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value,
    };
    this.api.login(loginInfo).subscribe({
      next:(res:any)=>{
        if(res.toString() === 'Invalid')
        this.responseMsg = 'Invalid Credentials!';
      else{
        this.responseMsg = '';
        this.api.saveToken(res.toString());
        this.router.navigateByUrl('/books/library')
      }
      },
      error:(err:any)=>{
        console.log('error');
        console.log(err)
      }
    })
  }

  getEmailErrors(){
    if(this.Email.hasError('required')) return 'Email is required';
    if(this.Email.hasError('email')) return 'Email is Invalid';
    return ''
  }

  getPasswordErrors(){
    if(this.Password.hasError('required')) return 'Password is required';
    if(this.Password.hasError('minlength')) return 'min 8 char required';
    if(this.Password.hasError('maxlength')) return 'max 15 char '
    return ''
  }
  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  
  }
  get Password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  
  }
  

}
