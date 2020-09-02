# PackenNg

This library contain all ui components for [Packen](https://packen.co) brand.

## Getting started

To use it first install it:

> npm i ngx-mask --save 
> npm i packen-ng --save

Then import the module to use its available components in your `app.module.ts` :

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

The **PackenNgModule** contain follow components:

>
> * [FileComponent](#FileComponent)
> * [PinMapComponent](#PinMapComponent)
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

## How to use each component

### FileComponent

#### Description

``` 
This component is an input to load a specific File.
```

#### Use it in HTML

``` html
<lib-packen-file [disabled]="disabledFile" [uploadedText]="'Archivo cargado'" [noUploadedText]="'Pendiente'"
    [title]="'Cara 1'" [subtitle]="'(Lado de la fotografia)'" name="lib-file-1" [(value)]="selectedFile"
    required="true">
</lib-packen-file>
```

#### Component appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_file/packen-file-default.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_file/packen-file-loaded.png)

#### Options

 - **name**: It difines the input identificator. Is is necesary to _ngModel_ funtionality.
 - **size**: It defines the size box of the input. Posibles values to use: `(tiny|small|medium|large|giant)` .
 - **disabled**: It defines if the input is enabled or not: `(true|false)` .
 - **iconLeft**: Url of the left side icon .
 - **title**: Main text in the input content .
 - **subtitle**: Description text in the input content .
 - **noUploadedText**: Text to show when the file is not uploded yet .
 - **uploadedText**: Text to show when the file is uploaded .
 - **value**: Variable where file will be save .
 - **required**: It defines if the field is required .

### PinMapComponent

#### Description

``` 
This component represent a marker inside a map (google map).
```

#### Use it in HTML

``` html
<lib-packen-pin-map typeIcon="default" icon="icon-keypad" type="active" [label]="'somelabel" [direction]="somedescription" iconPosition="left" dotPosition="down">
</lib-packen-pin-map>
```

#### Component appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_pinmap/packen-pin.png)

#### Options

 - **typeIcon**: It defines the content of the smallest box. Posibles values to use: `(default|icon|letter)` .
 - **type**: It defines the style of the largest box. Posibles values to use: `(default|active|refresh)` .
 - **icon**: It puts the icon to show inside the small box. It should be used with `typeIcon=icon` .
 - **letter**: It puts a letter to show inside the small box. It should be used with `typeIcon=letter` .
 - **iconPosition**: It defines where the small box will be. Posibles values to use: `(left|right)` .
 - **dotPosition**: It represents a small point arround the small box. The value to specify indicate where this point will be. Posibles values to use: `(left|right|top|down|none)` . **NOTE**: If the value is `none` , the point does not appear.
 - **label**: It defines a prefix for the content that will show in the largest box.
 - **direction**: It defines the content that will show in the largest box. **NOTE**: If this value and `letter` value are empty, the largest box does not appear.
 - **letter**: It defines the content that will show in the largest box.**NOTE**: If this value and `direction` value are empty, the largest box does not appear.

### TableComponent

#### Description

``` 
This component is a custom responsive table for Packen.
```

#### Use it in HTML

``` html
<lib-packen-table [list]="listContent" [numPages]="numPages" [pagination]="'pag-center'" [headers]="listHeaders" [showLoading]="loading" (onChangePage)="getListFromBackend($event)" (onSelectRow)="showSelectedRow($event)">
</lib-packen-table>
```

#### Component appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_table/table-desktop.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_table/table-mobile.png)

#### Options

 - **list**: It defines the table content. The list must have the structure `TableRow` .
 - **numPages**: It defines the pages num to show in the paginator.
 - **pagination**: It defines paginator position. Posibles values to use: `(pag-left|pag-center|pag-right)` .
 - **headers**: It defines the table headers. The list must have a `TableHeader` list.
 - **showLoading**: It defines the loading behavior that depends on the content request.
 - **emptyText**: Text to display when there is no results.

#### Events

 - **onChangePage**: It throw the selected page to update the content information in property `list` .
 - **onSelectRow**: It throw the selected row when you click the eye button.

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

 - **ItemInfo**: It defines a content and has the structure `key:value` . For example `Nombre: Pedro` .
 - **a) key**: It defines the content before `:` .
 - **b) value**: It defines the content after `:` .
 - **c) showInDesktop**: It defines whether the `key` value will be displayed on the desktop or not. Posibles values to use: `(true|false)` .
 - **d) style**: It defines box style of `value` property. Posibles values to use: `(blue-box|gray-box|blue-gray-box|purple-box|green-vivid-box|red-vivid-box|red-off-box|green-off-box)` .
 - **e) hideInDesktop**: Defines if this cell will be hidden when it is on desktop.
 - **f) capitalize**: Defines if this cell text will be transform in capitalize.

#### **TableColumn** class description

 - **TableColumn**: It defines the content of a cell. There can be several content rows ( `ItemInfo` ) in each cell.
 - **a) key**: It defines the column name.
 - **b) value**: It defines the content of the cell ( `ItemInfo` list).
 - **c) headInMobile**: Defines if this cell will be in the header section when it is on mobile.
 - **d) hideInMobile**: Defines if this cell will be hidden when it is on mobile.

#### **TableRow** class description

 - **TableRow**: It defines the table content.
 - **a) index**: It defines the row number.
 - **b) columns**: It represents each row to display in the table. It is a `TableColumn` list.


### InputComponent

``` 
This component is for input or textarea
```

#### Use it in HTML

``` html
<lib-packen-input size="tiny" label="Normal tiny required and pattern" icon="icon-lock" [(value)]="valueTest"
    placeholder="placeholder" type="text" textArea="false" required="true"
    messageErrorValidation="Error de validación" themeMessage="warning" iconMessage="icon-info" disabled="false"
    messageErrorPattern="Error de pattern" [pattern]="patternTest" [maxlength]="6" [minlength]="5"></lib-packen-input>
``` 

#### Component appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/input-normal.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/input-disabled.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/input-required.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/textarea-normal.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/text-area-disabled.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_input/text-area-required.png)


#### Options

 - **size**: It defines the size of font and input. Posibles values to use: `(tiny|small|medium|large|giant)` .
 - **label**: It defines the title or label of the input.
 - **icon**: Name of the icon to place on the right side `('icon-lock', 'icon-arrow-circle-right', 'icon-archive', etc)` .
 - **value**: Input value to show and change.
 - **placeholder**: placeholder of the input to show ` Examples:(Enter your password, enter you value, etc)` .
 - **textArea**: This defines if the field is textarea or not: `(true|false)`.
 - **rows**: It defines the number of rows of text area. **NOTE**: this item is defined in 4 for textarea
 - **required**: It defines if the input is required or not `(true|false)`.
 - **messageErrorValidation**: This message show when value inpus is empty.
 - **themeMessage**: It define the theme of message to show `(warning|default|primary|success)`.
 - **iconMessage**: It defines the icon of message to show. `('icon-info', 'icon-archive', etc)`  **NOTE**: If this name icon not isset the icon is empty.
 - **maxlength**: It defines the max length of the value. **NOTE**: this item is a number and not is required.
 - **minlength**: It defines the min length of the value. **NOTE**: this item is a number and not is required.
 - **disabled**: It define if the input is disabled. `(true|false)`.
 - **messageErrorPattern**: This message show when not validate the pattern.
 - **pattern**: Pattern for validate the value `Examples:('/\d/', '/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/', etc)`.
 - **mask**: It difines the mask for the input. it use external lib [ngx-mask](https://www.npmjs.com/package/ngx-mask)


### RadioComponent

``` 
This component represent a radio
```

#### Use it in HTML

``` html
<lib-packen-radio [radios]="radios" [(value)]="radioId" orientation="horizontal"></lib-packen-radio>
```

#### Component appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen_radio/radios.png)


#### Options

 - **radios**: It defines list of radios to show.
 - **value**: it defines the selected radio with the id.
 - **orientation**: It defines the orientation of the radios: `(horizontal|vetical)` .
 - **label**: it defines the label title for the input.

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

``` 
This component represent a checkbox
```
#### Use it in HTML

``` html
<lib-packen-checkbox [(values)]="checkboxes" orientation="horizontal"></lib-packen-checkbox>
```

#### Component appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen_checkbox/checkbox.png)


#### Options

 - **values**: It defines list of checkbox to show `(Array of CheckItem)`.
 - **orientation**: It defines the orientation of the checkbox: `(horizontal|vetical)` .

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

``` 
This component represent avatar or avatar input
```
#### Use it in HTML

``` html
<lib-packen-avatar size="tiny" src="https://cdn.pixabay.com/photo/2020/06/24/19/41/cat-5337501_960_720.jpg" 
    type="input" [(value)]="imageFile" title="Cambiar foto"></lib-packen-avatar>
```

#### Component appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen_avatar/avatars.png)


#### Options

 - **name**: It difines the input identificator. Is is necesary to _ngModel_ funtionality.
 - **size**: It defines the size of the image: `(tiny|small|medium|large)`.
 - **src**: It defines the source or image route. 
 - **type**: It defines if the image is default or input: `(default|input)`.
 - **value**: It defines the file value **NOTE**: this is required when type is `input`.
 - **title**: It defines the title or label of image: **NOTE**: is optional

### DropdownComponent

``` 
This component represent a dropdown
```
#### Use it in HTML

``` html
<lib-packen-dropdown [(value)]="itemId" [items]="items" size="medium"
    label="Dropdown" type="default"></lib-packen-dropdown>

<lib-packen-dropdown [items]="checkboxes" size="medium" label="Dropdown checkbox" value="Value not change"
    type="checkbox"></lib-packen-dropdown>

<lib-packen-dropdown [items]="radios" [(value)]="itemId" size="large" label="Driodown radio" 
    type="radio"></lib-packen-dropdown>
```

#### Options

 - **value**: It defines the value of the items **NOTE**: this item is required when type is `radio` or `default`. 
 - **items**: It defines the list of: ` (radios, checkbox, dropdown) (Array of Radios, Checkbox and Dropdown)`. 
 - **size**: It defines the size of the dropdown: `(tiny|small|medium|large|giant)`.
 - **label**: It defines the label or title of dropdown.
 - **type**: It defines the type of dropdown: `(default,checkbox,radio)`.

#### Dropdown Possibles Structures 

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

#### 1. Basic Dropdown.
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

#### 2. Icons (from font) Dropdown. 

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