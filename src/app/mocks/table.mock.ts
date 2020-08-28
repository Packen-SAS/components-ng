import { ShipmentList } from '../interfaces/table-item';

export let mockListShipments: ShipmentList = {
    success: true,
    message: true,
    pagination: {
        current_page: 1,
        total_pages: 4682,
        previous_page: null,
        next_page: 2
    },
    data: [
        {
            id: 48393,
            cost: '12500',
            user_resource_data: {
                full_name: 'Janeth santana parada',
                cellphone_number: '3001992999',
                document_number: '1022019911'
            },
            driver_data: {
                full_name: 'William danilo santana parada',
                vehicle: {
                    vehicle_type: 'Moto',
                    license_plate: 'ogi01d'
                },
                allied: 'REDSAM TRANSPORTES SAS'
            },
            admin_creator: {
                id: 0,
                email: 'No Email',
                full_name: 'customer_app'
            },
            service_type: 'Inmediato',
            current_service_status: 'Entregado',
            current_billing_status: 'Editable',
            created_at: '2020/08/24',
            finished_at: '2020/08/24',
            is_finished: false
        },
        {
            id: 48392,
            cost: '12500',
            user_resource_data: {
                full_name: 'Janeth santana parada',
                cellphone_number: '3001992999',
                document_number: '1022019911'
            },
            driver_data: null,
            admin_creator: {
                id: 0,
                email: 'No Email',
                full_name: 'customer_app'
            },
            service_type: 'Inmediato',
            current_service_status: 'Entregado',
            current_billing_status: 'Editable',
            created_at: '2020/08/23',
            finished_at: '2020/08/23',
            is_finished: false
        }
    ]
};
