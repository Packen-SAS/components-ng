// ---------------------------------------------------------------------
// Estructura para funcionamiento de Packen Table
// ---------------------------------------------------------------------

export interface TableRow {
    index: number;
    columns: TableColumn[];
}

export interface TableColumn {
    key: string;
    value: ItemInfo[];
    headInMobile?: boolean;
    hideInMobile?: boolean;
}

export interface ItemInfo {
    key: string;
    value: string;
    style?: string;
    showInDesktop?: boolean;
    hideInDesktop?: boolean;
    capitalize?: boolean;
}

export interface TableHeader {
    name: string;
}