import { of } from 'rxjs';
import { DropdownItem } from '../../interfaces/dropdown-item';

export const selectListMock = [
    {
        id: 1,
        name: of('A1'),
        description: 'Motocicletas de menos de 125 centímetros cúbicos',
        selected: false
    },
    {
        id: 2,
        name: of('A2'),
        description: 'Motocicletas de más de 125 centímetros cúbicos',
        selected: false
    },
    {
        id: 3,
        name: of('B1'),
        description: 'Automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses',
        selected: false
    },
    {
        id: 4,
        name: of('B2'),
        description: 'Camiones rígidos, busetas y buses',
        selected: false
    },
    {
        id: 5,
        name: of('B3'),
        description: 'Vehículos articulados y tractocamiones de servicio particular',
        selected: false
    },
    {
        id: 6,
        name: of('C1'),
        description: 'Automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses',
        selected: false
    },
    {
        id: 7,
        name: of('C2'),
        description: 'Camiones rígidos, busetas y buses',
        selected: false
    },
    {
        id: 8,
        name: of('C3'),
        description: 'Vehículos articulados de servicio público',
        selected: false
    }
];

export const dropdownListMock: DropdownItem[] = [
    {
        id: 1,
        disabled: false,
        title: 'Menu item'
    },
    {
        id: 2,
        disabled: false,
        title: 'Menu item 2'
    }
];

export const dropdownLabelListMock: DropdownItem[] = [
    {
        id: 1,
        disabled: false,
        label: 'Menu item'
    },
    {
        id: 2,
        disabled: false,
        label: 'Menu item 2'
    }
];
