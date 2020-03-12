import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { PackenButtonComponent } from './components/packen-button/packen-button.component';
import { AvatarsComponent } from './views/avatars/avatars.component';
import { PackenAvatarComponent } from './components/packen-avatar/packen-avatar.component';
import { DividersComponent } from './views/dividers/dividers.component';
import { PackenDividerComponent } from './components/packen-divider/packen-divider.component';
import { TabsComponent } from './views/tabs/tabs.component';
import { PackenTabsComponent } from './components/packen-tabs/packen-tabs.component';
import { CheckboxComponent } from './views/checkbox/checkbox.component';
import { PackenCheckboxComponent } from './components/packen-checkbox/packen-checkbox.component';
import { RadioComponent } from './views/radio/radio.component';
import { PackenRadioComponent } from './components/packen-radio/packen-radio.component';
import { TogglesComponent } from './views/toggles/toggles.component';
import { PackenToggleComponent } from './components/packen-toggle/packen-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    PackenButtonComponent,
    AvatarsComponent,
    PackenAvatarComponent,
    DividersComponent,
    PackenDividerComponent,
    TabsComponent,
    PackenTabsComponent,
    CheckboxComponent,
    PackenCheckboxComponent,
    RadioComponent,
    PackenRadioComponent,
    TogglesComponent,
    PackenToggleComponent
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
