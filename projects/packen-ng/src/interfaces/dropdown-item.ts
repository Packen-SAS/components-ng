export interface DropdownItem {
    id: number;
    left: object | boolean;
    right: object | boolean;
    disabled: boolean;
    title: string;
    subTitle?: string;
    info?: string;
    typeInfo?: string;
}
