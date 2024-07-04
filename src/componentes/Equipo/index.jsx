/* eslint react/prop-types: off */
/* e s l i n t-disable react/forbid-foreign-prop-types */
import './Equipo.css'
import Colaborador from '../Colaborador'
import Data from '../arreglos.jsx'
import Func from '../funciones.jsx'

const Equipo = (props) => {    
    
    /// Destructuración, podemos reemplazar props.equipos y props.fondo mediante esto:
    const { equipos, idx, colaboradores, adiosColaborador, nuevoColor } = props
    
    //console.log("Equipo-IDX: ", idx, colaboradores);
    //const fondo = props.fondo
    //const destacado = `3px solid ${destaque}`
    const estilo = {
        backgroundColor: Data.fondos[idx]
    }
    const colorBottom = Func.darker(Data.fondos[idx], 40)
    const subrayado = {
        paddingTop: '25px',
        /* borderBottom: `3px solid ${Data.destaques[idx]}` */
        borderBottom: `3px solid ${colorBottom}`
    }
    const hayColaboradores = colaboradores.filter(colab => colab.equipo == idx).length > 0
    //console.log("HAY COLABORADORES: ", hayColaboradores)
    
    return <> { 
        hayColaboradores && <div> 
           <section className="tit_equipo" style={estilo} >
               <input type="color"
                   className="input-color"
                   value={Data.fondos[idx]}
                   onChange={(evento) => 
                       nuevoColor(evento.target.value, idx)
                   }
               />
               <h5></h5>
               <h3 style={subrayado}>{equipos}</h3>
               <h5></h5>
               </section>
               <div className="colaboradores" style={estilo}>
                   { 
                       colaboradores.map((elem, indice) => <Colaborador idx={idx} key={indice} indice={indice} colaboradores={elem} quitaColaborador={adiosColaborador} />)
                   }
            </div>
        </div>
    }
        </>
}

export default Equipo;
