import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MapService} from './service/map.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule }   from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule, FormBuilder } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
