

const Card = ({participante}) => {

    return (
        <>
            <h1>Hola {participante.nombre} y tu dni es {participante.dni}, tu club es: {participante.club}</h1>
        </>
    )
}

export default Card