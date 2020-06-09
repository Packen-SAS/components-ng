import { Component, OnInit } from '@angular/core';
import { TableRow, listTable, listHeaders, ShipmentList } from '../../interfaces/table-item';
import { TableHeader, TableColumn } from 'projects/packen-ng/src/interfaces/table-item';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  listHeaders: TableHeader[];
  listTable: TableRow[];
  totalPages: number;
  requestDone: boolean;
  gotPage: boolean;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getServicesList('1');
    this.getTotalPages();
  }

  /**
   * Método para obtener la información a mostrar en la tabla
   * @param numPage El numero de pagina a obtener
   */
  getListFromBackend(numPage: number) {
    console.log("Page: ", numPage);
  }

  /**
   * Método para obtener solo la primera vez el total de paginas
   */
  getTotalPages() {
    this.requestDone = false;
    this.api.getServicesList('1').subscribe((list: ShipmentList) => {
      this.totalPages = list.pagination.total_pages;

      // Se construyen las cabeceras de la tabla
      this.listHeaders = [{ name: "Cod." }, { name: "Cliente" }, { name: "Coductor" }, { name: "Vehículo" }, { name: "Servicio" }, { name: "Tarifa" }, { name: "Estado" }];

      this.requestDone = true;
    });
  }

  /**
   * Método para consultar la lista de servicios segun la pagina dada
   * @param page La pagina a consultar
   */
  getServicesList(page: string) {
    this.gotPage = false;
    this.api.getServicesList(page).subscribe((list: ShipmentList) => {
      this.transformToTableStructure(list);
      this.gotPage = true;
    });
  }

  /**
   * Método para mapear la lista de la peticion a lista necesaria para el componente Packen Table
   * @param list Lista a procesar
   */
  transformToTableStructure(list: ShipmentList) {
    // Se construye el contenido de la tabla
    this.listTable = [];
    list.data.forEach(item => {
      const colum1: TableColumn = {
        key: "Cod.",
        headInMobile: true,
        value: [{ key: "", value: item.id.toString(), style: "blue-box", showInDesktop: false }]
      };

      const colum2: TableColumn = {
        key: "Cliente",
        value: [
          { key: "Nombre", value: item.user_resource_data.full_name, capitalize: true, showInDesktop: false },
          { key: "", value: "C.C. " + item.user_resource_data.document_number.toString(), showInDesktop: false },
        ]
      };

      const colum3: TableColumn = {
        key: "Conductor",
        value: [
          { key: "Nombre", value: item.driver_data ? item.driver_data.full_name : "", capitalize: true, showInDesktop: false },
          { key: "Aliado", value: item.driver_data ? item.driver_data.allied : "", capitalize: true, showInDesktop: true },
        ]
      };

      const colum4: TableColumn = {
        key: "Vehículo",
        value: [
          { key: "Tipo", value: item.driver_data ? item.driver_data.vehicle.vehicle_type : "", showInDesktop: false },
          { key: "Placa", value: item.driver_data ? item.driver_data.vehicle.license_plate : "", style: "gray-box", showInDesktop: true },
        ]
      };

      const colum5: TableColumn = {
        key: "Servicio",
        value: [
          { key: "Tipo", value: item.service_type, showInDesktop: false },
          { key: "Solicitado", value: item.created_at, showInDesktop: false },
          { key: "Estado", value: item.current_service_status, style: "blue-gray-box", showInDesktop: false, hideInDesktop: true },
        ]
      };

      const colum6: TableColumn = {
        key: "Tarifa",
        headInMobile: true,
        value: [
          { key: "", value: item.cost, showInDesktop: false },
        ]
      };

      const colum7: TableColumn = {
        key: "Estado",
        hideInMobile: true,
        value: [
          { key: "", value: item.current_service_status, style: "blue-gray-box", showInDesktop: false },
        ]
      };

      const row: TableRow = {
        index: item.id,
        columns: [colum1, colum2, colum3, colum4, colum5, colum6, colum7]
      }

      this.listTable.push(row);
    });
  }

  /**
   * Método para mostrar la fila seleccionada
   * @param row La fila seleccionada
   */
  showSelectedRow(row: TableRow) {
    console.log("Row selected: ", row);
  }

}
