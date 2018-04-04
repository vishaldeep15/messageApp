import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { MessageModule } from "./messages/message.module";
import { AuthModule } from "./auth/auth.module";
import { routing } from "./app.routing";
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [
        AppComponent, 
        AuthenticationComponent, 
        HeaderComponent,          
        ErrorComponent
    ],
    imports: [BrowserModule, MessageModule, AuthModule, routing, HttpModule],
    providers: [AuthService, ErrorService ],
    bootstrap: [AppComponent]
})
export class AppModule {

}