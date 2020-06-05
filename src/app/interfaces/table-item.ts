
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

// ---------------------------------------------------------------------
// Mock de lista creada con base a la estructura
// ---------------------------------------------------------------------

const item0 = new ItemInfo();
item0.key = "";
item0.value = "11002";
item0.style = "blue-box";

const col0 = new TableColumn();
col0.key = "Cod.";
col0.value = [item0];
col0.headInMobile = true;


const item1 = new ItemInfo();
item1.key = "Nombre";
item1.value = "Pedro Pinzon";

const item2 = new ItemInfo();
item2.key = "";
item2.value = "C.C. 1097046234";

const col1 = new TableColumn();
col1.key = "Cliente";
col1.value = [item1, item2];


const item3 = new ItemInfo();
item3.key = "";
item3.value = "Juan Quintero";

const item4 = new ItemInfo();
item4.key = "Aliado";
item4.value = "Integra";
item4.showInDesktop = true;

const col2 = new TableColumn();
col2.key = "Conductor";
col2.value = [item3, item4];


const item5 = new ItemInfo();
item5.key = "";
item5.value = "Carry";

const item6 = new ItemInfo();
item6.key = "Placa";
item6.value = "NHL234";
item6.style = "gray-box";

const col3 = new TableColumn();
col3.key = "Vehiculo";
col3.value = [item5, item6];


const item7 = new ItemInfo();
item7.key = "Tipo";
item7.value = "Inmediato";
item7.style = "blue-gray-box";

const item8 = new ItemInfo();
item8.key = "Solicitado";
item8.value = "11/03/2020";

const col4 = new TableColumn();
col4.key = "Servicio";
col4.value = [item7, item8];


const item9 = new ItemInfo();
item9.key = "";
item9.value = "$ 17.000";

const col5 = new TableColumn();
col5.key = "Tarifa";
col5.value = [item9];
col5.headInMobile = true;

const row1 = new TableRow();
row1.index = 1;
row1.columns = [col0, col1, col2, col3, col4, col5];

let list = [row1, row1];
export let listTable = list;