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
}

export interface TableHeader {
    name: string;
}

export class ShipmentList {
    success: boolean;
    message: boolean;
    pagination: ShipmentPagination;
    data: ShipmentInfo[];
}

export class ShipmentPagination {
    current_page: number;
    total_pages: number;
    previous_page: number;
    next_page: number;
}

export class ShipmentInfo {
    id: number;
    cost: string;
    service_type: string;
    current_service_status: string;
    current_billing_status: string;
    created_at: string;
    finished_at: string;
    is_finished: boolean;
    user_resource_data: ShipmentUserData;
    driver_data: ShipmentDriverData;
    admin_creator: ShipmentAdminData;
}

export class ShipmentUserData {
    full_name: string;
    cellphone_number: string;
    document_number: string;
}

export class ShipmentDriverData {
    full_name: string;
    allied: string;
    vehicle: ShipmentVehicleData;
}

export class ShipmentVehicleData {
    vehicle_type: string;
    license_plate: string;
}

export class ShipmentAdminData {
    id: number;
    email: string;
    full_name: string;
}

// ---------------------------------------------------------------------
// Mock de lista creada con base a la estructura
// ---------------------------------------------------------------------

const item0: ItemInfo = {
    key: '',
    value: '11002',
    style: 'blue-box'
};
const col0: TableColumn = {
    key: 'Cod.',
    value: [item0],
    headInMobile: true
};

const item1: ItemInfo = {
    key: 'Nombre',
    value: 'Pedro Pinzon'
};
const item2: ItemInfo = {
    key: '',
    value: 'C.C. 1097046234'
};
const col1: TableColumn = {
    key: 'Cliente',
    value: [item1, item2]
};

const item3: ItemInfo = {
    key: '',
    value: 'Juan Quintero'
};
const item4: ItemInfo = {
    key: 'Aliado',
    value: 'Integra',
    showInDesktop: true
};
const col2: TableColumn = {
    key: 'Conductor',
    value: [item3, item4]
};

const item5: ItemInfo = {
    key: '',
    value: 'Carry'
};
const item6: ItemInfo = {
    key: 'Placa',
    value: 'NHL234',
    style: 'gray-box'
};
const col3: TableColumn = {
    key: 'Vehiculo',
    value: [item5, item6]
};

const item7: ItemInfo = {
    key: 'Tipo',
    value: 'Inmediato',
    style: 'blue-gray-box'
};
const item8: ItemInfo = {
    key: 'Solicitado',
    value: '11/03/2020'
};
const col4: TableColumn = {
    key: 'Servicio',
    value: [item7, item8]
};

const item9: ItemInfo = {
    key: '',
    value: '$ 17.000'
};
const col5: TableColumn = {
    key: 'Tarifa',
    value: [item9],
    headInMobile: true
};

const row1: TableRow = {
    index: 1,
    columns: [col0, col1, col2, col3, col4, col5]
};

const list = [row1, row1];
export const listTable = list;

const headers: TableHeader[] = [{ name: 'Cod.' }, { name: 'Cliente' }, { name: 'Coductor' }, { name: 'Vehículo' }, { name: 'Servicio' }, { name: 'Tarifa' }];
export const listHeaders = headers;
