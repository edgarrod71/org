/* eslint react/prop-types: 0 */
import {useState} from 'react'
import "./Formulario.css";
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import Func from '../funciones.jsx'

const Formulario = (props) => {
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("SE INTENTA MANEJAR EL ENVIO...", e)
        let datosEnviar = {
            nombre, //: nombre,
            puesto, //: puesto,
            foto, //: foto
            equipo
        }
        /// spread operator
        // registrarColaborador([...colaboradores, colaborador])
        //console.log(datosEnviar)
        registrarColaborador(datosEnviar)
    }

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")
    const { registrarColaborador, nuevoEquipo } = props ///Deconstruye (ver manejarEnvio)
    
    const [nomEquipo, setNomEquipo] = useState("")
    const [colorEquipo, setColorEquipo] = useState(Func.randomColor())
    //console.log("COLOR ", colorEquipo)
    
    const manejarEquipo = (e) => {
        e.preventDefault()
        //console.log("NUEVO EQUIPO: ", nomEquipo, colorEquipo)
        nuevoEquipo({nomEquipo, colorEquipo})
    }
    
    return <>
        <section className="formulario">
           <form onSubmit={manejarEnvio}>
               <h2>Amigo, llena el formulario</h2>
                <Campo Titulo="Nombre" placeholder="Coloca un nombrecito" required={true}
                            value={nombre} updateField={setNombre} />        
                <Campo Titulo="Puesto" placeholder="Dónde te dejaron?" required
                            value={puesto} updateField={setPuesto} />        
                <Campo Titulo="Foto" placeholder="no me asustes" required
                            value={foto} updateField={setFoto} />
                <ListaOpciones Titulo="Opciones" 
                            value={equipo} updateField={setEquipo} required/>
               <Boton>Crear ayudante
                   <img src="src/img/Logo.png" alt="LOGO"/>
               </Boton>
           </form>
        <form onSubmit={manejarEquipo}>
               <h2>Definete un nuevo Equipo</h2>
                <Campo Titulo="Nombre" placeholder="Cómo se llamará el equipo?" required
                            valor={nomEquipo} updateField={setNomEquipo} />        
                <Campo Titulo="Color" placeholder="Ponle un color en HEX" required
                            valor={colorEquipo} updateField={setColorEquipo} tipo="color" /> 
               <Boton>Crear equipo
                   <img src="./src/img/Logo.png" alt="LOGO"/>
               </Boton>             
        </form>
       </section> 
       
    </>
}

export default Formulario
