import { Cita } from "./Cita"
import { useCitas } from "../hooks/useCitas";

export const Citas = () => {

    const { 
        loading, 
        citas, 
        doctor, 
        setDoctor, 
        paciente, 
        setPaciente,
        handleSubmitCita } = useCitas()

    if (loading) {
        return (
            <h4>
                Espere un momento...!! <br/> cargando ...
            </h4>
        )
    }

    return(
        <>
            <h1>Administrador de citas</h1>

            <form onSubmit={handleSubmitCita}>

                <div className="row">
                    <input 
                        className="form-control"
                        placeholder="Doctor"
                        value={doctor}
                        onChange={({ target }) => setDoctor( target.value )} />

                    <input 
                        className="form-control"
                        placeholder="Paciente"
                        value={paciente}
                        onChange={({ target }) => setPaciente( target.value )} />

                    <button 
                        type="submit"
                        className="btn btn-primary">
                        Agregar Cita
                    </button>
                </div>
            </form>

            <br />

            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Doctor</th>
                    <th>Paciente</th>
                    <th>Estado</th>
                </thead>

                <tbody>
                    {
                        citas.map((cita) => (
                            <Cita 
                                key={cita.id.toString()}
                                id={cita.id}
                                doctor={ cita.doctor }
                                paciente={ cita.paciente }
                                estado={ cita.estado } />
                        ))
                    }                  

                </tbody>
            </table>
        </>
    )
}