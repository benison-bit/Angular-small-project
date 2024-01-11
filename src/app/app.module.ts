import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    FooterComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
  ],
  providers: [Window],
  bootstrap: [AppComponent]
})
export class AppModule { }
