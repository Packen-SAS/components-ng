// ---------------------------------------------------------------------
// Estructura para funcionamiento de Packen Table
// ---------------------------------------------------------------------

export class TableRow {
    index: number;
    columns: TableColumn[];
}

export class TableColumn {
    key: string;
    value: ItemInfo[];
    headInMobile: boolean;
}

export class ItemInfo {
    key: string;
    value: string;
    style: string;
    showInDesktop: boolean;
}

export class PageItem {
    num: number;
    classes: string;
}
