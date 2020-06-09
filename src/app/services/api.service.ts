import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Servico para listar los servicios
   * @param page La pagina a obtener
   */
  getServicesList(page: string) {
    let params = new HttpParams();
    params = params.append('page', page);

    const sesion = {
      client: "eYMokjmQ4KipBCb5aoOyqg",
      keepSession: true,
      token: "GH8UCEdBiUzlZnvkBTDLag",
      uid: "juan.contreras@packen.co",
    }

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Access-Token", sesion.token)
      .set("client", sesion.client)
      .set("uid", sesion.uid);
    headers = headers.set("Content-Type", "application/json");

    return this.http.get("https://packen-api-dev.herokuapp.com/api/v2/shipments/admin/list", { headers: headers, params: params, responseType: 'json' });
  }

}
