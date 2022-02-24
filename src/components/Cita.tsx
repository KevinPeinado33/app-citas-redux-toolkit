import { CitaInterface } from '../interfaces/citaInterfaces';

export const Cita = ({id, doctor, paciente, estado}: CitaInterface) => (
    <tr >

        <td>{ id }</td>
        <td>{ doctor }</td>
        <td>{ paciente }</td>
        <td>{ estado ? 'Pendiente' : 'Atendido' }</td>
        
    </tr>
)