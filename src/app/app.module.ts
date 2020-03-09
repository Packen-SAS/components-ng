import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { PackenButtonComponent } from './components/packen-button/packen-button.component';
import { AvatarsComponent } from './views/avatars/avatars.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    PackenButtonComponent,
    AvatarsComponent
  ],
  imports: [
    BrowserModule,
    FeatherModule.pick(allIcons)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FeatherModule
  ],
})
export class AppModule { }
