/* eslint react/prop-types: 0 */
import "./ListaOpciones.css";
import Data from "../arreglos.jsx"

// const ophtml = opciones.map(opt => `<option>${opt}</option>`) // esta no funciona abajo...

const ListaOpciones = (props) => {
    
//    props.valor === "" ? document.getElementById("opciones").textContent : <></>
    
    const tomaOpcion = (e) => {
        props.updateField(e.target.value)
    }

    return (
        <div>
            <label htmlFor="opciones">
                {props.Titulo}:
            </label>
                <select name="opciones" id="opciones" value={props.valor} onChange={tomaOpcion} required={props.required}>
                   <option value="" defaultValue="" hidden >Selecciona una opción!</option>
                    {Data.equipos.map((opt, idx) => <option key={idx} value={idx}>{opt}</option>)}
                </select>
        </div>
    );
};

export default ListaOpciones;
