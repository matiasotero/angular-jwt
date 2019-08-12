import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 8 Authentication with JWT Tutorial';

  constructor(private authService:AuthService){}

}
