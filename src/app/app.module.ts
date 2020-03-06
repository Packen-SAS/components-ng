import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { PackenButtonComponent } from './components/packen-button/packen-button.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    PackenButtonComponent
  ],
  imports: [
    BrowserModule,
    FeatherModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FeatherModule
  ]
})
export class AppModule { }
