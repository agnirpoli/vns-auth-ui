import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApplicationService } from './service/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vns-auth-ui';

  clientId = environment.clientId;
  secretKey = environment.secretKey;
  constructor(private applicationService:ApplicationService){
    applicationService.generateToken({clientId:this.clientId,secretKey:this.secretKey}).subscribe(data => {
      sessionStorage.setItem("token",data.jwt);
    })
  }
}
