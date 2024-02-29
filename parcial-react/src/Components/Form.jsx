import {useState} from 'react'
import Card from './Card'

const Form = () => {

    const [error, setError] = useState(false)
    const [mostrar, setMostrar] = useState(false)
    
    const [participante, setParticipante] = useState(
        {
            nombre : '',
            dni : '',
            club : ''
        }
    )
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(participante.nombre.trim().length >=3 && participante.nombre.trim() == participante.nombre && participante.dni.length > 6){
            setError(false)
            setMostrar(true)
        }else{
            setError(true)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label >Nombre del participante: </label>
            <input type="text" onChange={({target}) => setParticipante({...participante, nombre : target.value})}/>
            <label >Dni: </label>
            <input type="text" onChange={({target}) => setParticipante({...participante, dni : target.value})}/>
            <label >Club de futbol favorito: </label>
            <input type="text" onChange={({target}) => setParticipante({...participante, club : target.value})}/>
            <button>Enviar</button>
        </form>

        {error && <p style={{color: 'red'}}>Por favor chequea que la información sea correcta.</p>}
        
        {mostrar && <Card participante={participante}/>}
        </>
    )
}

export default Form