import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { SidebarComponent } from './sidebar';
// import { SideNavComponent } from './sidenav'
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { MailboxComponent } from './mailbox';
import { CheckBoxComponent } from './checkbox';
import { ComposeComponent } from './composeMail'
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        Ng2SearchPipeModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        SidebarComponent,
        // SideNavComponent,
        MailboxComponent,
        CheckBoxComponent,
        ComposeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };