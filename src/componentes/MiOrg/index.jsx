/* eslint react/prop-types: 0 */
import {useState} from "react"
import './MiOrg.css'


const MiOrg = (props) => {
    
    console.log(props)
    // const  [getValue, setValue]  =  initVal()
    const [muestraO, actualizaMuestraO] = useState(true)

    const muestraOrg = () => {
        actualizaMuestraO(!muestraO)  // sólo si es booleano...
        /*
        if (muestraO == "MUESTRA") {
            actualizaMuestraO("NO MUESTRA")
        } else {
            actualizaMuestraO("MUESTRA")
        } */
        // console.log("Muestra/Oculta la organización: ", muestraO)
    }
    
    return (
        <>
            <section className='orgSection'>
                {muestraO && <h5></h5>} 
                <h3>Mi Organización</h3>
                <div>
                    <img src="../../src/img/add.png" alt="Agregar" onClick={props.funcCambiarMostrar}/>
                </div>
            </section>
            <section className='orgPanel'>
                <div>
                    
                </div>
            </section>
        </>
    )
}

export default MiOrg