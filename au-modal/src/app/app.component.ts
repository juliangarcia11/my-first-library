import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginActive: boolean = true;

  /**
   * Sets the login tab to active or not
   * @param loginActive boolean True if the login tab should be active
   */
  setLoginActive(loginActive: boolean) {
    this.loginActive = loginActive;
  }
}
