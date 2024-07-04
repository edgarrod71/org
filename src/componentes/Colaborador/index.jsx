/* eslint react/prop-types: off */
import { PiTrashSimpleDuotone, PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";
import './Colaborador.css'
/* import Data from '../arreglos.jsx' */
/* import Func from '../funciones.jsx' */

const Colaborador = (props) => {
    
    /// Deconstructor
    const {idx, indice, colaboradores, quitaColaborador } = props
    
    const estilo = {
       /* backgroundColor: Data.destaques[idx] */
        backgroundColor:  'rgba(0, 0, 0, 0.22)' /// Interesante, se oscurece
    }
    //console.log("PARTICIPANTE: ", idx, colaboradores, colaboradores.equipo)
   // console.log(idx == colaboradores.equipo ? "ALELUYA!!!" : "PLOP") 
    const comparativo = idx === parseInt(colaboradores.equipo)
    return  <> 
         {
        comparativo && 
        <div className="colaborador">
            <span className="trashy" onClick={() => quitaColaborador(indice, colaboradores.equipo)} > 
                <PiTrashSimpleDuotone /> 
            </span>
            <span className="eHeart">
                <PiHeartStraightBold />
            </span>
            <span className="fHeart">
                <PiHeartStraightFill />
            </span>
            <div className="encabezado" style={estilo}>
                <img src={colaboradores.foto} alt={colaboradores.nombre}/>
            </div>
            <div className="info">
                <h4>{colaboradores.nombre}</h4>
                <h4>{colaboradores.puesto}</h4>
            </div>
        </div>
        }
    </>  
}

export default Colaborador;