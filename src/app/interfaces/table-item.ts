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
}

export interface ItemInfo {
    key: string;
    value: string;
    style?: string;
    showInDesktop?: boolean;
}

export interface TableHeader {
    name: string;
}

// ---------------------------------------------------------------------
// Mock de lista creada con base a la estructura
// ---------------------------------------------------------------------

let item0: ItemInfo = {
    key: "",
    value: "11002",
    style: "blue-box"
}
let col0: TableColumn = {
    key: "Cod.",
    value: [item0],
    headInMobile: true
}

let item1: ItemInfo = {
    key: "Nombre",
    value: "Pedro Pinzon"
}
let item2: ItemInfo = {
    key: "",
    value: "C.C. 1097046234"
}
let col1: TableColumn = {
    key: "Cliente",
    value: [item1, item2]
}

let item3: ItemInfo = {
    key: "",
    value: "Juan Quintero"
}
let item4: ItemInfo = {
    key: "Aliado",
    value: "Integra",
    showInDesktop: true
}
let col2: TableColumn = {
    key: "Conductor",
    value: [item3, item4]
}

let item5: ItemInfo = {
    key: "",
    value: "Carry"
}
let item6: ItemInfo = {
    key: "Placa",
    value: "NHL234",
    style: "gray-box"
}
let col3: TableColumn = {
    key: "Vehiculo",
    value: [item5, item6]
}

let item7: ItemInfo = {
    key: "Tipo",
    value: "Inmediato",
    style: "blue-gray-box"
}
let item8: ItemInfo = {
    key: "Solicitado",
    value: "11/03/2020"
}
let col4: TableColumn = {
    key: "Servicio",
    value: [item7, item8]
}

let item9: ItemInfo = {
    key: "",
    value: "$ 17.000"
}
let col5: TableColumn = {
    key: "Tarifa",
    value: [item9],
    headInMobile: true
}

let row1: TableRow = {
    index: 1,
    columns: [col0, col1, col2, col3, col4, col5]
}

let list = [row1, row1];
export let listTable = list;

let headers: TableHeader[] = [{ name: "Cod." }, { name: "Cliente" }, { name: "Coductor" }, { name: "Vehículo" }, { name: "Servicio" }, { name: "Tarifa" }];
export let listHeaders = headers;