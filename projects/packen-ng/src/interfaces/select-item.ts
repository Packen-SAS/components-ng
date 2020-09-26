import { Observable } from 'rxjs';

/**
 * Clase que representa la informacion de la estructura de un select
 */
export class SelectItem {
    id: any;
    name: Observable<string>;
    icon?: string;
    description?: string;
    selected?: boolean;
}

/**
 * Clase que representa la estructura de los estilos posibles para un select
 */
export class StyleBoxSelect {
    'border-radius': string;
    'font-size': string;
    width: string;
    height: string;
}

/**
 * Clase que representa la estructura de los estilos posibles para un icon
 */
export class StyleIconSelect {
    'font-size': string;
}
