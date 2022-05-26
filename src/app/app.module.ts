import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpServicesService } from './services/http/http-services.service';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertsService } from './services/alert/alerts.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shell/app.component';
import { LoginComponent } from './screens/login/login.component';
import { PagenotfoundComponent } from './screens/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TimeComponent } from './components/time/time.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    LoaderComponent,
    TimeComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
    BrowserAnimationsModule

  ],
  providers: [HttpServicesService,MessageService,AlertsService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
