import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authservice/auth.service';
import { NotificationService } from 'src/app/core/services/notificationservice/notification.service';
import { User } from 'src/app/models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.value;
    console.log('Register payload:', payload);

    this.authService.login(this.form.value).subscribe({
      next: (res : any ) => {
        console.log('Response:', res);
        
        
        setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
  
        this.notify.success(res.message);
        
        
      },
      error: (err) => {
        console.log(err);
        
        this.notify.showByStatus(err.status, err.error.message);
        this.form.reset(); 
        console.error('Login failed', err);
      },
    });
  }
}
