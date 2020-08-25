import { ItemInfo, TableColumn, TableRow } from '../../interfaces/table-item';

export const itemInfoMock: ItemInfo = {
    key: 'Nombre',
    value: 'German',
    style: 'blue-box',
    capitalize: true,
    showInDesktop: false,
    hideInDesktop: false
}

export const columnInfoMock: TableColumn = {
    key: 'Cliente',
    value: [itemInfoMock],
    headInMobile: true,
    hideInMobile: false
}

export const tableRowMock: TableRow = {
    index: 1,
    columns: [columnInfoMock]
}