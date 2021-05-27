# PackenNg

This library contain all ui components for [Packen](https://packen.co) brand.

## Getting started

To use it first install it:

> *Install dependencies*
> - npm i ngx-mask --save
> - npm i @fullcalendar/core --save
> - npm i quill --save
> - npm i chart.js --save

> *Install lib*
> - npm i packen-ng --save

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

## Available Components

The **PackenNgModule** contains the following components:

>
> * [RatingComponent](#RatingComponent)
> * [SelectComponent](#SelectComponent)
> * [FileComponent](#FileComponent)
> * [PinMapComponent](#PinMapComponent)
> * [DateComponent](#DateComponent)
> * [TableComponent](#TableComponent)
> * [InputsComponent](#InputComponent)
> * [AvatarsComponent](#AvatarComponent)
> * [CheckboxComponent](#CheckboxComponent)
> * [RadioComponent](#RadioComponent)
> * [DropdownComponent](#DropdownComponent)
> * [InputShowComponent](#InputShowComponent)
> * [AlertComponent](#AlertComponent)
> * [DropdownShowComponent](#DropdownShowComponent)
> * [IconMapComponent](#IconMapComponent)
> * [CounterComponent](#CounterComponent)
> * CheckboxSingleComponent
> * ButtonsComponent
> * DividersComponent
> * TabsComponent
> * TogglesComponent

## Components

### CounterComponent

Show a counter for add or subtract value

#### HTML

```html
<lib-packen-counter [max]="10" [min]="1" [(value)]="counter">
</lib-packen-counter>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_counter/counter.png)

### Options

- **value**: Defines value.
- **max**: Defines the maximum allowed value.
- **min**: Defines the minimum value allowed

### RatingComponent

Show a component to rate with stars

#### HTML 

``` html
<lib-packen-rating [fontSize]="25" [paddingRight]="3" [(value)]="valueVariable" [readonly]="true"  [numberStars]="5" (valueChange)="valueStarChange($event)">
</lib-packen-rating>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen-rating/Screenshot+from+2021-01-26+09-27-23.png)

#### Options

- **fontSize**: Defines font size stars.
- **paddingRight**: Defines padding between stars.
- **value**: Defines value.
- **readonly**: Defines if the component is read-only `(true|false)`.
- **numberStars**: Defines the number stars to show.

#### Events
 - **valueChage**: Emits when value is changed **NOTE**: this event is optional.

### SelectComponent

Show an options group to single select option.

#### HTML

``` html
<lib-packen-select [subtitle]="'Si/No'" [width]="128" [height]="128" [fontSize]="18" [items]="selectListYes"
    [boldBorder]="true" [grayBack]="true" [borderRadius]="8" [iconSize]="40" [disabled]="disabledYes"
    (outputClick)="setSelectedOptionYes($event)" [selectedId]="selectedIdYes">
</lib-packen-select>
```

#### Appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen-select/select-exemple-one.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen-select/select-exemple-two.png)

#### Options

 - **subtitle**: Label to show above options group.
 - **width**: Defines width box option in pixels.
 - **height**: Defines height box option in pixels.
 - **items**: Defines options to show in the group. Must have an array of `SelectItem` structure.
 - **fontSize**: Defines text option size.
 - **boldBorder**: Defines if box border will be darker `(true|false)`.
 - **borderRadius**: Defines box border radius size.
 - **fontSize**: Defines text option size.
 - **iconSize**: Defines displayed icon size.
 - **grayBack**: Defines if background box will be gray `(true|false)`.
 - **selectedId**: Item id that was selected.
 - **outputClick**: Action trigered when an option is selected.
 - **outline**: Defines if box border not selected is gray `(true|false)`.
 - **direction**: Defines the directions of items `(row|column)`.
 - **fullWidth**: Defines if option has full width `(true|false)`.
#### Option structure 

``` javascript
class SelectItem {
    id: number;
    name: string;
    description: string;
    selected?: boolean;
}
```

### FileComponent

Input to load a specific file.

#### HTML
|
``` html
<lib-packen-file [disabled]="disabledFile" [uploadedText]="'Archivo cargado'" [noUploadedText]="'Pendiente'"
    [title]="'Cara 1'" [subtitle]="'(Lado de la fotografia)'" name="lib-file-1" [(value)]="selectedFile"
    required="true" [fontSizeTitle]="17" [boldTitle]="false" [opacity]="true" [phantom]="true">
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
 - **showUploadedText**: Defines show file status.
 - **setBorder**: Defines if gray border border will be shown: `(true|false)`.
 - **typeSrcRight**: Defines right side icon type: `(icon|img)`.
 - **iconRight**: Defines right side icon name (from some font).
 - **srcRight**: Defines right side url image when `typeSrcRight` is `img`.
 - **typeSrcLeft**: Defines left side icon type: `(icon|img)`.
 - **iconLeft**: Defines left side icon name (from some font).
 - **srcLeft**: Defines left side url image `typeSrcLeft` is `img`.
 - **phantom**: Defines if background will be transparent or not.`(true|false)`.

### PinMapComponent

A map marker.


#### HTML

``` html
<lib-packen-pin-map typeIcon="icon" icon="icon-keypad" type="default" label="DE:" direction="Calle 72 #12-81"
    iconPosition="left" dotPosition="top" radar="blue">
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
 - **radar**: Defines if radar location will be showed. Value to pass is the radar color `(green|blue)`.
 - **opacity**: Defines opacity of radar color. `(0.1 - 1.0)`.

### DateComponent

Custom date input.

#### HTML

``` html
<lib-packen-date [disabled]="disabledDate" [required]="true" [border]="false" [placeholder]="'DD/MM/YYYY'"
    [minDate]="dateToday" [isMobile]="false" [(value)]="dateSelected" [phantom]="true"
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
 - **phantom**: Defines if background will be transparent or not.`(true|false)`.

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
    center?: boolean;
    minWidth?: number;

}

interface TableHeader {
    name: string;
}
```

#### **ItemInfo** class description

 - **ItemInfo**: Defines a content and has the structure `key:value` . For example `Nombre: Pedro` .
 - **a) key**: Defines the content before `:` .
 - **b) value**: Defines the content after `:` .
 - **c) showInDesktop**: Defines whether the `key` value will be displayed on the desktop or not. Posibles values to use: `(true|false)` .
 - **d) style**: Defines box style of `value` property. Posibles values to use: `(blue-box|gray-box|blue-gray-box|purple-box|green-vivid-box|red-vivid-box|red-off-box|green-off-box)` .
 - **e) hideInDesktop**: Defines if this cell will be hidden when it is on desktop.
 - **f) capitalize**: Defines if this cell text will be capitalized.
 - **g) center**: Defines if the item is centered **NOTE**: not is required and the value is true or false.
 - **h) minWidth**: Defines the minWidth of the item **NOTE**: the value is a number. 

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
 - **prefix**: Add suffix to masked value.
 - **thousandSeparator**: Change default separator to a custom.
 - **maxWidth**: Defines max-width input. **NOTE**: this option not is required and is number.
 - **comment**: Defines a comment or help text for the input.
 - **name**: Name of input to define.

#### Events
 - **outputClickOutside**:  Emits when is clicked outside input but input is clicked **NOTE**: this event is optional.
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
 - **type**: Type of dropdown: `(default|checkbox|radio)`.
 - **centerTitle**: Defines title centered: `(true|false)`.
 - **level** Dropdown theme: `(primary)`.
 - **autocomplete**: Defines if input autocomplete showed or not
 - **widthList**: Defines the width size of list options **NOTE**:  this option is a number and is not required.
 - **marginLeftList**: Defines the margin-left of list options **NOTE**: this option is a number and is not required.
 - **adaptMobile**: Defines if the title component adapts when the screen is mobile **NOTE**: this option is boolean and is not required.
 - **subLabel**: Defines the secondary menu label to the right of the component.
 - **borderRadius**: Defines if the images has border-radius: `(true|false)`.
 - **backgroundColor**: Defines the background-color of component.

#### Dropdown Structures

``` javascript
interface DropdownItem {
    id:number,
    left: IconItem,
    right: IconItem,
    disabled: boolean,
    title?: string,
    label?: string,
    subTitle?: string,
    info?: string,
    typeInfo?:string        
}

interface IconItem {
    type: string;
    name?: string;
    src?: string;
    label?:string;
}

interface RadioItem {
    id: number,
    label: string,
    disabled: boolean
}

interface CheckItem {
    id: number,
    label: string,
    state: string,
    disabled: boolean,
    value?: any
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

### InputShowComponent

A special input to show more details.

#### HTML

``` html
<lib-input-show icon="icon-id" color="yellow-off" type="icon" [title]="'1.018.234.542'" url="httt://image.png"
  label="Documento de identidad" message="Documento a la espera de aprobación" labelPosition="bottom"
  (clickSee)="clickSeeButton($event)" (clickEdit)="clickEdit($event)" [showEdit]='true' [showSee]="true"
  [description]="'(Lado de la fotografia)'" [phantom]="true" [isPlaceholder]="false" [inputType]="'text'" [minlength]="2" [maxlength]="6">
</lib-input-show>
```

#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen-input-show/inputs-show.png)

#### Options

- **color**: Defines the message color `(yellow-off)`.
- **type**: Defines if the icon is a icon name or image `(icon|url)`.
- **icon**: Defines icon to show side the name **NOTE**: this item is required when type is icon.
- **title**: Defines title to show.
- **url**: Defines the image url to show in icon **NOTE**: this item is required when type is url.
- **label**: Defines the label field to show.
- **labelPosition**: Defines the label position `(top|bottom)` **NOTE**: default value is bottom.
- **showEdit**: Defines if eye icon is showed or not. `(true|false)` **NOTE**: default value is false.
- **showSee**: Defines if the pencil icon is showed or not. `(true|false)` **NOTE**: default value is false.
- **phantom**: Defines if background will be transparent or not.`(true|false)`.
- **description**: Set a smaller description text side label.
- **isInput**: Defines whether to show input when clicked.
- **mask**: Input masks for external library [ngx-mask](https://www.npmjs.com/package/ngx-mask)
- **isPlaceholder**: Defines if the title shows style placeholder. **NOTE** Only used when the component is a 
child.
 - **maxlength**: Max length of input value. **NOTE**: this option is a number and is not required.
 - **minlength**: Min length of input value. **NOTE**: this option is a number and it not required.
 - **inputType**: Defines the type of input to display `(number|text|hidden|etc)`.
#### Events
- **clickSee**: Triggers when see icon is clicked **NOTE**: Event is required when **showSee** is **true**.
- **clickEdit**: Triggers when see edit is clicked **NOTE**: Event is required when **showEdit** is **true**.
- **keyUpInput** Triggers when the input value is changed **NOTE**:  Event is not required.
### AlertComponent

An alert.

#### HTML

``` html
<lib-alert [color]="'purple'" [(show)]="true" (clickClose)="closeAlert($event)"
    title="Aún faltan documentos para que Andrés pueda rodar con Packen">
</lib-alert>
```

#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen-alert/alert.png)

#### Options

- **color**: Defines alert color `(purple)`.
- **title**: Defines title to show inside alert `(icon|url)`.
- **show**: Defines if show or not `(false|true)`.

#### Events

- **clickClose**: Emits when click in the icon close **NOTE**: Event not is required.

### DropdownShowComponent

A special dropdown with more details to show.

#### HTML 

``` html
<lib-packen-dropdown-show [(value)]="idSelectedDropdown" [items]="listDropdown" [label]="'EPS'"
    (keyUpValue)="keyUpDropdown($event)" (changeValue)="changeValue($event)" [icon]="'icon-email'" 
    [labelPosition]="'top'" [required]="true" [phantom]="true" [disabled]="true">
</lib-packen-dropdown-show>
```

#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown-show/dropdown.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown-show/dropdown-show-label-bottom-normal.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen-dropdown-show/dropdown-show-label-bottom.png)

#### Options

- **value**: Defines the item selected id.
- **items**: Defines dropdown list **NOTE**: this item is an array of type **DropdownShowItem**.
- **label**: Defines label to show.
- **labelPosition**: Defines label position `(top|bottom)` **NOTE**: default value is bottom.
- **icon**: Defines icon to show side the name.
- **required**: Defines if the component is required `(false|true)`.
- **phantom**: Defines if background is transparent.`(true|false)`.
- **disabled**: Defines if component is enabled: `(true|false)`.

#### Events

- **keyUpValue**: Emits when key up in the input **NOTE**: Event is not required.
- **changeValue**: Emits when the value changes **NOTE**: Event is not required.

``` javascript
interface DropdownShowItem {
  id: number;
  title?: string;
}
```

### IconMapComponent

A icon to show on the map

#### HTML 

``` html
<lib-packen-icon-map [value]="'$25.000'" [label]="'Peaje'" [icon]="'icon-toll'" [color]="'#0D73FF'">
</lib-packen-icon-map>
```


#### Appearance
![](https://packenco.s3.amazonaws.com/packen_ng/packen-icon-map/packen-icon-map.png)

#### Options

- **value**: Defines value to show.
- **label**: Defines label to show.
- **icon**: Defines icon to show.
- **color**: Defiles content color.


