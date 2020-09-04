export interface DropdownItem {
    id: number;
    left?: IconItem;
    right?: IconItem;
    disabled: boolean;
    title?: string;
    label?: string;
    subTitle?: string;
    info?: string;
    typeInfo?: string;
}

export interface IconItem {
    type: string;
    name?: string;
    src?: string;
}
