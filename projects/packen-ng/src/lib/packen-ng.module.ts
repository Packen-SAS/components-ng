import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackenAvatarComponent } from './packen-avatar/packen-avatar.component';
import { PackenButtonComponent } from './packen-button/packen-button.component';
import { PackenCheckboxComponent } from './packen-checkbox/packen-checkbox.component';
import { PackenDividerComponent } from './packen-divider/packen-divider.component';
import { PackenDropdownComponent } from './packen-dropdown/packen-dropdown.component';
import { PackenInputComponent } from './packen-input/packen-input.component';
import { PackenPinMapComponent } from './packen-pin-map/packen-pin-map.component';
import { PackenRadioComponent } from './packen-radio/packen-radio.component';
import { PackenTabsComponent } from './packen-tabs/packen-tabs.component';
import { PackenToggleComponent } from './packen-toggle/packen-toggle.component';
import { PackenTableComponent } from './packen-table/packen-table.component';
import { PackenCarouselComponent } from './packen-carousel/packen-carousel.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';
import { PackenFileComponent } from './packen-file/packen-file.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    PackenAvatarComponent,
    PackenButtonComponent,
    PackenCheckboxComponent,
    PackenDividerComponent,
    PackenDropdownComponent,
    PackenInputComponent,
    PackenPinMapComponent,
    PackenRadioComponent,
    PackenTabsComponent,
    PackenToggleComponent,
    PackenTableComponent,
    PackenCarouselComponent,
    PackenFileComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    PackenAvatarComponent,
    PackenButtonComponent,
    PackenCheckboxComponent,
    PackenDividerComponent,
    PackenDropdownComponent,
    PackenInputComponent,
    PackenPinMapComponent,
    PackenRadioComponent,
    PackenTabsComponent,
    PackenToggleComponent,
    PackenTableComponent,
    PackenCarouselComponent,
    PackenFileComponent
  ]
})
export class PackenNgModule { }
