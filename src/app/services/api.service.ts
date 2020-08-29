import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  sesion = {
    client: 'eN0Q9pbOLlWCJHT5z_fVqA',
    keepSession: true,
    token: 'yb6TKHdFcUTyD1IOzTVa5A',
    uid: 'jhampiergiron4@gmail.com'
  };

  /**
   * Servico para listar los servicios
   * @param page La pagina a obtener
   */
  getServicesList(page: string) {
    let params = new HttpParams();
    params = params.append('page', page);



    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Access-Token', this.sesion.token)
      .set('client', this.sesion.client)
      .set('uid', this.sesion.uid);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get('https://packen-api-dev.herokuapp.com/api/v2/shipments/admin/list', { headers, params, responseType: 'json' });
  }

  /**
   * Service get the list of the entities
   * @param name name of the healt entitie
   */
  getListHealtEntities(name: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Access-Token', this.sesion.token)
      .set('client', this.sesion.client)
      .set('uid', this.sesion.uid);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get('https://packen-api-dev.herokuapp.com/api/v2/wizard/health_entities?name=' + name, { headers, responseType: 'json' });

  }


}
