# PackenNg

This library contain all ui components for the [Packen](https://packen.co) brand.

## Getting started

### Build packen-ng

```
ng build packen-ng --prod
```
Optionally, to publish
```
cd dist/packen-ng
npm publish
```

### Test views
```
npm install 
```

Import the module to use its components in `app.module.ts` :

``` javascript
import {
    PackenNgModule
} from 'packen-ng';

@NgModule({
    declarations: [],
    imports: [
        PackenNgModule
    ],
    providers: []
})
```

## Available components

The **PackenNgModule** contains the following components:

>
> * [FileComponent](#FileComponent)
> * [PinMapComponent](#PinMapComponent)
> * [DateComponent](#DateComponent)
> * [TableComponent](#TableComponent)
> * [InputsComponent](#InputComponent)
> * [AvatarsComponent](#AvatarComponent)
> * [CheckboxComponent](#CheckboxComponent)
> * [RadioComponent](#RadioComponent)
> * [DropdownComponent](#DropdownComponent)
> * ButtonsComponent
> * DividersComponent
> * TabsComponent
> * TogglesComponent

## Components

### FileComponent

Input to load a specific file.

#### HTML

``` html
<lib-packen-file [disabled]="disabledFile" [uploadedText]="'Archivo cargado'" [noUploadedText]="'Pendiente'"
    [title]="'Cara 1'" [subtitle]="'(Lado de la fotografia)'" name="lib-file-1" [(value)]="selectedFile"
    required="true">
</lib-packen-file>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_file/packen-file-default.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_file/packen-file-loaded.png)

#### Options

 - **name**: Input identifier necesary for _ngModel_ functionality.
 - **size**: Defines the size of an input box. Possibles values: `(tiny|small|medium|large|giant)`.
 - **disabled**: Defines input is enabled or not: `(true|false)`.
 - **iconLeft**: URL of the left-side icon.
 - **title**: Main input text.
 - **subtitle**: Description text.
 - **noUploadedText**: Text to show when a file is not yet uploaded.
 - **uploadedText**: Text to show when a file is uploaded.
 - **value**: Variable where file will be saved.
 - **required**: Defines if a field is required.

### PinMapComponent

A map marker.


#### HTML

``` html
<lib-packen-pin-map typeIcon="default" icon="icon-keypad" type="active" [label]="'somelabel" [direction]="somedescription" iconPosition="left" dotPosition="down">
</lib-packen-pin-map>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_pinmap/packen-pin.png)

#### Options

 - **typeIcon**: Content of the smallest box. Possible values: `(default|icon|letter)`.
 - **type**: Style of the largest box. Possible values: `(default|active|refresh)`.
 - **icon**: Icon to show inside a small box. Should be used with `typeIcon=icon`.
 - **letter**: A letter inside a small box. Should be used with `typeIcon=letter`.
 - **iconPosition**: Position of a small box. Possible values: `(left|right)`.
 - **dotPosition**: Position of a small point arround a small box. Possible values: `(left|right|top|down|none)`. **NOTE**: If the value is `none`, the point does not appear.
 - **label**: Prefix for the content that will show in the largest box.
 - **direction**: Content that will show in the largest box. **NOTE**: If this and `letter` values are empty, the largest box does not appear.
 - **letter**: Content that will show in the largest box. **NOTE**: If this  and `direction` values are empty, the largest box does not appear.

### DateComponent

Custom date input.

#### HTML

``` html
<lib-packen-date [disabled]="disabledDate" [required]="true" [border]="false" [placeholder]="'DD/MM/YYYY'"
    [minDate]="dateToday" [isMobile]="false" [(value)]="dateSelected"
    [label]="'Fecha de vencimiento de la licencia'">
</lib-packen-date>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen-date/packen-date-component.png)

#### Options

 - **disabled**: Field is disabled.
 - **required**: Field is required.
 - **border**: Whether input has a border. Possible values: `(true|false)`.
 - **placeholder**: Placeholder input.  ` Example: (DD/MM/YYYY)`.
 - **minDate**: Minimum calendar date.
 - **maxDate**: Maximum calendar date.
 - **isMobile**: Responsive display for popup calendar.
 - **value**: Variable where selected date will be saved.
 - **label**: Text label to show under the date.

### TableComponent

Custom responsive table for Packen.

#### HTML

``` html
<lib-packen-table [list]="listContent" [numPages]="numPages" [pagination]="'pag-center'" [headers]="listHeaders" [showLoading]="loading" (onChangePage)="getListFromBackend($event)" (onSelectRow)="showSelectedRow($event)">
</lib-packen-table>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_table/table-desktop.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_table/table-mobile.png)

#### Options

 - **list**: Table content. Must have the structure `TableRow`.
 - **numPages**: Number of pages to show in the paginator.
 - **pagination**: Paginator position. Possible values: `(pag-left|pag-center|pag-right)`.
 - **headers**: Table headers. Must have a `TableHeader` list.
 - **showLoading**: Loading behavior, dependant on request content.
 - **emptyText**: Text to display when there are no results.

#### Events

 - **onChangePage**: Update `list` property when page is changed.
 - **onSelectRow**: Updated selected row when eye button is clicked.

#### TableRow structure 

``` javascript
interface TableRow {
    index: number;
    columns: TableColumn[];
}

interface TableColumn {
    key: string;
    value: ItemInfo[];
    headInMobile ? : boolean;
    hideInMobile ? : boolean;
}

interface ItemInfo {
    key: string;
    value: string;
    style ? : string;
    showInDesktop ? : boolean;
    hideInDesktop ? : boolean;
    capitalize ? : boolean;
}

interface TableHeader {
    name: string;
}
```

#### **ItemInfo** class description

 - **ItemInfo**: Defines content and has the structure `key:value`. For example `Nombre: Pedro`.
 - **a) key**: Defines the content before `:`.
 - **b) value**: Defines the content after `:`.
 - **c) showInDesktop**: Defines whether the `key` value will be displayed on the desktop or not. Possible values: `(true|false)`.
 - **d) style**: Defines box style of `value` property. Possible values: `(blue-box|gray-box|blue-gray-box)`.
 - **e) hideInDesktop**: Defines if this cell will be hidden when it is on desktop.
 - **f) capitalize**: Defines if this cell text will be capitalized.

#### **TableColumn** class description

 - **TableColumn**: Defines the content of a cell. There can be several content rows ( `ItemInfo` ) in each cell.
 - **a) key**: Defines the column name.
 - **b) value**: Defines the content of the cell ( `ItemInfo` list).
 - **c) headInMobile**: Defines if this cell will be in the header section when it is on mobile.
 - **d) hideInMobile**: Defines if this cell will be hidden when it is on mobile.

#### **TableRow** class description

 - **TableRow**: Defines table content.
 - **a) index**: Defines the row number.
 - **b) columns**: Represents each row to display in the table in a `TableColumn` list.


### InputComponent

For input or textarea.

#### HTML

``` html
<lib-packen-input size="tiny" label="Normal tiny required and pattern" icon="icon-lock" [(value)]="valueTest"
    placeholder="placeholder" type="text" textArea="false" required="true"
    messageErrorValidation="Error de validación" themeMessage="warning" iconMessage="icon-info" disabled="false"
    messageErrorPattern="Error de pattern" [pattern]="patternTest" [maxlength]="6" [minlength]="5"></lib-packen-input>
``` 

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/input-normal.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/input-disabled.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/input-required.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/textarea-normal.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/text-area-disabled.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/text-area-required.png)


#### Options

 - **size**: Size of font and input. Possible values: `(tiny|small|medium|large|giant)`.
 - **label**: Title or label of the input.
 - **icon**: Name of the icon to place on the right side `('icon-lock', 'icon-arrow-circle-right', 'icon-archive', etc)`.  **NOTE**: If not set, icon will be empty.
 - **value**: Input value to show and change.
 - **placeholder**: Placeholder value for input ` Examples:(Enter your password, enter you value, etc)`.
 - **textArea**: Whether field is text area: `(true|false)`.
 - **rows**: Number of rows in text area.
 - **required**: Whether input is required `(true|false)`.
 - **messageErrorValidation**: Message to show when input is empty.
 - **themeMessage**: Message theme: `(warning|default|primary|success)`.
 - **iconMessage**: Message icon: `('icon-info', 'icon-archive', etc)`.
 - **maxlength**: Max length of input value. **NOTE**: this option is a number and is not required.
 - **minlength**: Min length of input value. **NOTE**: this option is a number and it not required.
 - **disabled**: Whether input is disabled: `(true|false)`.
 - **messageErrorPattern**: Message to show for invalid patterns.
 - **pattern**: Pattern (regex) to validate a value. `Examples:('/\d/', '/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/', etc)`.
 - **mask**: Input masks for external library [ngx-mask](https://www.npmjs.com/package/ngx-mask)


### RadioComponent

A radio button.

#### HTML

``` html
<lib-packen-radio [radios]="radios" [(value)]="radioId" orientation="horizontal"></lib-packen-radio>
```

#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen_radio/radios.png)


#### Options

 - **radios**: List of radio buttons.
 - **value**: Selected radio with id.
 - **orientation**: Orientation of the radio button: `(horizontal|vetical)`.
 - **label**: Label title for the input.

#### Events
 - **valueChage**: Emits when value is changed **NOTE**: this event is optional.

#### Radio object structure 

``` javascript
 interface RadioItem {
    id:number,
    label:string,
    disabled: boolean
}
```

### CheckboxComponent

A checkbox

#### HTML

``` html
<lib-packen-checkbox [(values)]="checkboxes" orientation="horizontal"></lib-packen-checkbox>
```

#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen_checkbox/checkbox.png)


#### Options

 - **values**: List of checkboxes to show `(Array of CheckItem)`.
 - **orientation**: Defines the orientation of a checkbox: `(horizontal|vetical)`.

#### Checkbox object structure 

``` javascript
interface CheckItem {
    id: number,
    label: string,
    state: string,
    disabled: boolean
}
```

### AvatarComponent

Avatar or avatar input.

#### HTML

``` html
<lib-packen-avatar size="tiny" src="https://cdn.pixabay.com/photo/2020/06/24/19/41/cat-5337501_960_720.jpg" 
    type="input" [(value)]="imageFile" title="Cambiar foto"></lib-packen-avatar>
```

#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen_avatar/avatars.png)


#### Options

 - **name**: Identifier necesary for _ngModel_ funtionality.
 - **size**: Size of the image: `(tiny|small|medium|large)`.
 - **src**: Source or image route. 
 - **type**: Whether image is default or input: `(default|input)`.
 - **value**: File value **NOTE**: required when type is `input`.
 - **title**: Title or label of image: **NOTE**: is optional

### DropdownComponent

A dropdown.

#### HTML

``` html
<lib-packen-dropdown [(value)]="itemId" [items]="items" size="medium"
    label="Dropdown" type="default"></lib-packen-dropdown>

<lib-packen-dropdown [items]="checkboxes" size="medium" label="Dropdown checkbox" value="Value not change"
    type="checkbox"></lib-packen-dropdown>

<lib-packen-dropdown [items]="radios" [(value)]="itemId" size="large" label="Driodown radio" 
    type="radio"></lib-packen-dropdown>
```

#### Options

 - **value**: Value of the items **NOTE**: this item is required when type is `radio` or `default`. 
 - **items**: Type of items: ` (radios, checkbox, dropdown) (Array of Radios, Checkbox and Dropdown)`. 
 - **size**: Size of the dropdown: `(tiny|small|medium|large|giant)`.
 - **label**: Label or title of dropdown.
 - **type**: Type of dropdown: `(default,checkbox,radio)`.

#### Dropdown Structures

``` javascript
interface DropdownItem {
    id:number,
    left: Object|boolean,
    right: Object|boolean,
    disabled: boolean,
    title: string,
    subTitle?: string,
    info?: string,
    typeInfo?:string        
}

interface RadioItem {
    id:number,
    label:string,
    disabled: boolean
}

interface CheckItem {
    id: number,
    label: string,
    state: string,
    disabled: boolean
}
```

### Examples

#### 1. Basic Dropdown
![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown/dropdown-normal.png)
```html
let dropdownNormal = Array<DropdownItem> = [
    {
      id: 1,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item 2'
    },
    {
      id: 3,
      left: false,
      right: false,
      disabled: true,
      title: 'Menu item 3'
    }
];
```

#### 2. Icons (from font) Dropdown 

![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown/dropdown.png)

```html
let dropdownIcons: Array<DropdownItem> = [
    {
      id: 1,
      left: false,
      right: {
        type: 'icon',
        name: 'icon-archive'
      },
      disabled: false,
      title: 'Title 1',
      subTitle: 'Sub title',
    },
    {
      id: 2,
      left: {
        type: 'icon',
        name: 'icon-battery'
      },
      right: false,
      disabled: true,
      title: 'Title 2',
      subTitle: '',
    },
    {
      id: 3,
      left: {
        type: 'icon',
        name: 'icon-settings-2'
      },
      right: {
        type: 'icon',
        name: 'icon-attach-2'
      },
      disabled: false,
      title: 'Title 3',
      subTitle: 'Sub title',
    }
  ];

```

#### 3. Image (from url) Dropdown.

![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown/dropdown-image.png)
  ```html

let dropdownImages: Array<DropdownItem> = [
    {
      id: 1,
      left: {
        type: 'avatar',
        src: "../../../assets/images/avatar.jpg"
      },
      right: false,
      disabled: false,
      title: 'Title 1',
      subTitle: 'Sub title',
    },
    {
      id: 2,
      left: {
        type: 'avatar',
        src: "../../../assets/images/avatar.jpg"
      },
      right: false,
      disabled: true,
      title: 'Title 2',
      subTitle: 'Sub title',
    },
    {
      id: 3,
      left: {
        type: 'avatar',
        src: "../../../assets/images/avatar.jpg"
      },
      right: false,
      disabled: false,
      title: 'Title 3',
      subTitle: 'Sub title',
    }
  ];
```

#### 4. Checkbox (Array of CheckItem) Dropdown.
![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown/dropdown-checkbox.png)
```html
let checkboxes: Array<CheckItem> = [
    { id: 1, label: 'Label 1', state: 'checked', disabled: false },
    { id: 2, label: 'Label 2', state: 'checked', disabled: true },
    { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }
  ];
```

#### 5. Radio (Array of RadioItem) Dropdown.
![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown/dropdown-radio.png)
```html
let radios: Array<RadioItem> = [
    { id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false },
    { id: 3, label: 'Label 3', disabled: false },
    { id: 4, label: 'Label 4', disabled: true }
  ];
```