import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { TableComponent } from './views/table/table.component';
import { PackenNgModule } from 'packen-ng';
import { FilesComponent } from './views/files/files.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatesComponent } from './views/dates/dates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsShowComponent } from './views/inputs-show/inputs-show.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { InputsShowDropdownComponent } from './views/dropdowns-show/dropdowns-show.component';
import { SelectsComponent } from './views/selects/selects.component';
import { IconMapComponent } from './views/icon-map/icon-map.component';
import { RatingComponent } from './views/rating/rating.component';
import { CountersComponent } from './views/counters/counters.component';

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
    FilesComponent,
    DatesComponent,
    InputsShowComponent,
    AlertsComponent,
    InputsShowDropdownComponent,
    SelectsComponent,
    IconMapComponent,
    RatingComponent,
    CountersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    FeatherModule.pick(allIcons),
    ClickOutsideModule,
    PackenNgModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FeatherModule
  ],
})
export class AppModule { }
