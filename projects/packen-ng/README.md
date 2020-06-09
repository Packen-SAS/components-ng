# PackenNg

This library contain all ui components for [Packen](https://packen.co) brand.

## Getting started

To use it first install it:

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
> * [PinMapComponent](#PinMapComponent)
> * [TableComponent](#TableComponent)
> * ButtonsComponent
> * AvatarsComponent
> * DividersComponent
> * TabsComponent
> * CheckboxComponent
> * RadioComponent
> * TogglesComponent
> * InputsComponent
> * DropdownsComponent
>

## How to use each component

### PinMapComponent

#### Description

``` 
This component represent a marker inside a map (google map).
```

#### Use it in HTML

``` html
<app-packen-pin-map typeIcon="default" icon="icon-keypad" type="active" [label]="'somelabel" [direction]="somedescription" iconPosition="left" dotPosition="down">
</app-packen-pin-map>
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
<app-packen-table [list]="listContent" [numPages]="numPages" [pagination]="'pag-center'" [numColumns]="7" (onChangePage)="getListFromBackend($event)">
</app-packen-table>
```

#### Component appearance

![](https://packenco.s3.amazonaws.com/packen_ng/packen_table/table-desktop.png)
![](https://packenco.s3.amazonaws.com/packen_ng/packen_table/table-mobile.png)

#### Options

 - **list**: It defines the table content. The list must have the structure `TableRow` .
 - **numPages**: It defines the pages num to show in the paginator.
 - **pagination**: It defines paginator position. Posibles values to use: `(pag-left|pag-center|pag-right)` .
 - **numColumns**: It defines the columns number to display in the table.

#### Events

 - **onChangePage**: It throw the selected page to update the content information in property `list` .

#### TableRow structure 

``` javascript
interface TableRow {
    index: number;
    columns: TableColumn[];
}

interface TableColumn {
    key: string;
    value: ItemInfo[];
    headInMobile?: boolean;
}

interface ItemInfo {
    key: string;
    value: string;
    style?: string;
    showInDesktop?: boolean;
}
```

#### **ItemInfo** class description

 - **ItemInfo**: It defines a content and has the structure `key:value` . For example `Nombre: Pedro` .
 - **a) key**: It defines the content before `:` .
 - **b) value**: It defines the content after `:` .
 - **c) showInDesktop**: It defines whether the `key` value will be displayed on the desktop or not. Posibles values to use: `(true|false)` .
 - **d) style**: It defines box style of `value` property. Posibles values to use: `(blue-box|gray-box|blue-gray-box)` .

#### **TableColumn** class description

 - **TableColumn**: It defines the content of a cell. There can be several content rows ( `ItemInfo` ) in each cell.
 - **a) key**: It defines the column name.
 - **b) value**: It defines the content of the cell ( `ItemInfo` list).
 - **c) headInMobile**: Defines if this cell will be in the header section when it is on mobile.

#### **TableRow** class description

 - **TableRow**: It defines the table content.
 - **a) index**: It defines the row number.
 - **b) columns**: It represents each row to display in the table. It is a `TableColumn` list.
