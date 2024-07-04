//import {useState} from "react"
import './Campo.css'

const campoTexto = (props) => {
    //const [valor, setValor] = useState("")
    
    const { tipo = "text", Titulo} = props
    
    let dynPlaceHolder = props.placeholder
    if (props.placeholder.length > 0) {
        dynPlaceHolder = props.placeholder + '...'
    }
    
    /// NO entiendo el porqué de que length funcione arriba pero no aquí abajito...
    /*let dynRequired = props.req
    console.log("Requerido?: ", dynRequired, " de ", props.Titulo)
    if (props.req == 0) {
        dynRequired = ""
    } */
    
    const manejaCambio = (e) => {
        //console.log("manejando el cambio sin Petro", e.target.value)
        //setValor(e.target.value)
        props.updateField(e.target.value)
    }
    
    return (
        <> <div>
            <label htmlFor={Titulo}>{Titulo}:</label>
            <input type={tipo} placeholder={dynPlaceHolder} id={Titulo} name={Titulo} required={props.required} value={props.valor} onChange={manejaCambio}/>
            </div>
            {props.URL}
        </>
    )
}

export default campoTexto
