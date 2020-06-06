import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ClickOutsideModule } from 'ng-click-outside';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { AvatarsComponent } from './views/avatars/avatars.component';
import { DividersComponent } from './views/dividers/dividers.component';
import { TabsComponent } from './views/tabs/tabs.component';
import { CheckboxComponent } from './views/checkbox/checkbox.component';
import { RadioComponent } from './views/radio/radio.component';
import { TogglesComponent } from './views/toggles/toggles.component';
import { InputsComponent } from './views/inputs/inputs.component';
import { DropdownsComponent } from './views/dropdowns/dropdowns.component';
import { PinMapComponent } from './views/pin-map/pin-map.component';
import { PackenNgModule } from '../../projects/packen-ng/src/lib/packen-ng.module';
import { TableComponent } from './views/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    AvatarsComponent,
    DividersComponent,
    TabsComponent,
    CheckboxComponent,
    RadioComponent,
    TogglesComponent,
    InputsComponent,
    DropdownsComponent,
    PinMapComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FeatherModule.pick(allIcons),
    ClickOutsideModule,
    PackenNgModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FeatherModule
  ],
})
export class AppModule { }
