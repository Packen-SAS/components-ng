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
