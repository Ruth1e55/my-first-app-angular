import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  static NoOfAlerts = 0;
  displayDetails = false;
  logs: string[] = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    const timestamp = new Date();
    this.logs.push(`Clicked at ${timestamp}`);
  }
}