import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { CitaInterface } from '../interfaces/citaInterfaces'

export const citApi = createApi({
    reducerPath: 'citaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:4000'}),
    endpoints: ( builder ) => ({
    
        getCitasById: builder.query<CitaInterface, string>({
            query: ( id ) => `/${ id }`
        }),

        geAllCitas: builder.query<CitaInterface, string> ({
            query: () => '/'
        })
    
    })

})

export const { getCitasById  } = citApi.endpoints