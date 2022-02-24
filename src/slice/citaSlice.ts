import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CitaInterface } from '../interfaces/citaInterfaces';

export interface CitaState {
    loading: boolean
    citas: CitaInterface[]
    error: string | any
}

const initialState: CitaState = {
    loading: false,
    citas: [],
    error: ''
}

export const citaSlice = createSlice({
    name: 'cita',
    initialState,
    reducers: {

        fetchCitas: (state) => {
            state.loading = true
        },

        setCitas: (state, action: PayloadAction<CitaInterface[]>) => {
            state.loading = false
            state.citas = action.payload
        },

        registrarCita: (state, action: PayloadAction<CitaInterface>) => {
            state.loading = false
            state.citas = [...state.citas, action.payload]
        },

        eliminarCita: (state, action: PayloadAction<number>) => {    
            state.loading = false        
            state.citas = state.citas.filter( (x) => x.id !== action.payload )
        },

        actualizarCita: (state, action: PayloadAction<CitaInterface>) => {    
            state.loading = false        
            state.citas = state.citas.map( 
                (x) => ( x.id === action.payload.id ) 
                            ? x = action.payload
                            : x
            )
        },

        errorCita: (state, action: PayloadAction<any>) => {   
            state.loading = false         
            state.error = action.payload
        }

    }
})

export const { 
    fetchCitas,
    setCitas,
    registrarCita, 
    eliminarCita, 
    actualizarCita, 
    errorCita,
} = citaSlice.actions

export default citaSlice.reducer
