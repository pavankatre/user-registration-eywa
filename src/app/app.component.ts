import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegestrationComponent } from './components/user-regestration/user-regestration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserRegestrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'userRegestration-eywa';
}
