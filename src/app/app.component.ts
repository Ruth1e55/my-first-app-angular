import {Component} from '@angular/core';
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = ''
  serverCreation: string = 'No server is created'

  addServer(name: string) {
    this.name = name;
    this.serverCreation = "The Server has been created : " + name
    ServerComponent.NoOfAlerts += 1
    // ServerComponent.updateNumbers(ServerComponent.NoOfAlerts)
  }


}
