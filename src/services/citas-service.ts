import { Dispatch } from 'redux';
import { api } from '../api/configAxios';

import { CitaInterface } from '../interfaces/citaInterfaces'
import { errorCita, fetchCitas, registrarCita, setCitas } from '../slice/citaSlice';

export class CitasService {

    private STATUS_OK  = 200
    private CREATED_OK = 201

    constructor() { }

    obtenerCitas = () => async (dispatch: Dispatch) => {

        dispatch( fetchCitas() )

        try {

            const response = await api.get<CitaInterface[]>('/citas')

            if ( this.STATUS_OK === response.status ) {
                dispatch( setCitas(response.data) )
            }
            
        } catch ( error ) {
            dispatch( errorCita(error) )
        }

    }

    registrarCita = (cita: CitaInterface) => async (dispatch: Dispatch) => {

        dispatch( fetchCitas() )

        try {
           
            const response = await api.post<any>('/citas', cita)
            
            if ( this.CREATED_OK === response.status ) {
                dispatch( registrarCita( cita ) )
            }


        } catch ( error ) {
            dispatch( errorCita(error) )
        }

    }

    editarCita(id: number, cita: CitaInterface) {

    }

    eliminarCita(id: number) {

    }

}