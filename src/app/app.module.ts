import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from './servers/servers.component';
import {FormsModule} from "@angular/forms";
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
