import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { InspectionApiService } from './inspection-api.service';
import { StatusComponent } from './status/status.component';
import { InspectionTypeComponent } from './inspection-type/inspection-type.component';


@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    StatusComponent,
    InspectionTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
