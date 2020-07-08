import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-starter',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router) {
  }
  title = 'ProjectManagement';
  public logIn() {
    this.userAuthService.login('test', 'test')
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/project-tracker/dashboard']);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
