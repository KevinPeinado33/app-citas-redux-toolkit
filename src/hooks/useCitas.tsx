import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CitaInterface } from "../interfaces/citaInterfaces";
import { CitasService } from "../services/citas-service";
import { RootState } from "../store/store";

export const useCitas = () => {

    const citasService = new CitasService()
    const dispatch = useDispatch()

    const { citas, loading } = useSelector((state: RootState) => state.citas)

    const { obtenerCitas, registrarCita } = citasService;


    const [ doctor, setDoctor ]     = useState('')
    const [ paciente, setPaciente ] = useState('')

    useEffect(() =>{
        dispatch( obtenerCitas() )
    }, [dispatch])

    const handleSubmitCita = (event: any) => {
        
        event.preventDefault()

        const data: CitaInterface = {
            id: citas.length + 1,
            doctor,
            paciente,
            estado: true
        }

        dispatch( registrarCita(data) )

        setDoctor('')
        setPaciente('')

    }

    return {
        loading,
        citas,
        doctor,
        setDoctor,
        paciente,
        setPaciente,
        handleSubmitCita
    }
}