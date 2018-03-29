import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './messages/message.component';
import { AuthenticationComponent } from './auth/authentication.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full'},
    { path: 'messages', component: MessageComponent},
    { path: 'auth', component: AuthenticationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);