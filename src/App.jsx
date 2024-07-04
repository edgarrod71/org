import { useState } from 'react'
import './App.css'
import Data from './componentes/arreglos.jsx'
import Header from './componentes/Header' // './componentes/Header/index.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/Equipo'
import Footer from './componentes/Footer'
import Func from './componentes/funciones.jsx'

function App() {
  /// ESTADOS ( H O O K S )
  const [formularioVisible, setFormularioVisible] = useState(true)
  const [colaboradores, setColaboradores] = useState([]) //Data.participantes)
  const [/* fondos */, setDataFondos] = useState(Data.fondos) // OJO, NO ESTOY USANDO VARIABLE TIPO GET EN ESTE HOOK!!!
  const [/* equipos */, setNuevoEquipo] = useState(Data.equipos)
    
  const cambiarMostrarMain = () => {
    setFormularioVisible(!formularioVisible)
    //console.log(formularioVisible.toString)
  }

  /// Registrar colaborador
  const registrarColaborador = (colaborador) => {
      //console.log("registrando un colaborador ", colaborador)
      setColaboradores([...colaboradores, colaborador])
  }
  
  /// Eliminar colaborador
  const eliminarColaborador = (indice, colaborador) => {
      //console.log("Eliminando un colaborador ", indice, colaborador)
      let nuevosColaboradores = colaboradores.filter((elem, idx) => !(parseInt(elem.equipo) === parseInt(colaborador) && idx === parseInt(indice)))
      setColaboradores(nuevosColaboradores)
  }
  
  /// Actualizar color de Equipo  // ojo, la implementación que hice aquí toca directamente la variable externa Data.fondos en vez de la posibilidad de poner una en el Hook ( fondos )
  const actualizarColor = (color, idx_Equipo) => {
      //console.log("ACTUALIZANDO EL COLOR A: ", color, idx_Equipo)
//      Data.fondos = fondos
      Data.fondos[idx_Equipo] = color /// Data.fondos debe ser var en vez de const
      setDataFondos(Data.fondos[idx_Equipo])
  }
  
  /// nuevo Equipo
  const nuevoEquipo = (equipo) => {
      /// Verificamos primero si ya existe un elemento 
      let comboBox = document.getElementById("opciones")
      
      let existe = false
      Array.from(comboBox.options).forEach(elem => {
          if (elem.textContent.toUpperCase() === equipo.nomEquipo.toUpperCase()) { 
              existe = true; 
              return; /// Salgamos del bucle
          } 
          //console.log(elem.textContent, " === ", equipo.nomEquipo)
      });
      if (existe) {
          window.alert(`${equipo.nomEquipo} ya existe, escribe otro nombre`);
          return;  /// Salgamos del método
      } else {
          /// Agregamos un nuevo elemento en <select id="opciones"></select>
          Data.equipos.push(equipo.nomEquipo)
          Data.fondos.push(equipo.colorEquipo.toString())
          Data.destaques.push(Func.darker(equipo.colorEquipo.toString()))
          
          let l = Data.destaques.length - 1
          console.log("RECIBE: ", equipo.nomEquipo, equipo.colorEquipo, Data.fondos[l].toString(), Data.destaques[l].toString())

/*          let nuevaOpcion = document.createElement('option')
          nuevaOpcion.textContent = equipo.nomEquipo
          nuevaOpcion.value = comboBox.options.length /// la cantidad de elementos es la nueva opción

          comboBox.add(nuevaOpcion) */
          setNuevoEquipo(Data.equipos)
      }
  }
  
  return <>
    <Header />
    {
      formularioVisible && <Formulario registrarColaborador={registrarColaborador} 
          colaboradores={colaboradores}
          nuevoEquipo={nuevoEquipo} /// esto me llevó tiempo detectar que lo había metido en Equipo
      />

    }
    <MiOrg funcCambiarMostrar={cambiarMostrarMain}/>

    { 
        Data.equipos.map((elem, idx) => 
      /// DEVOLVEMOS A COLABORADORES PARA SER RECIBIDOS POR LOS PROPS DE CADA COMPONENTE 
            <Equipo equipos={elem} key={idx} idx={idx} 
                colaboradores={colaboradores} 
                adiosColaborador={eliminarColaborador}
                nuevoColor={actualizarColor} 
            /> 
        )
    }
    <Footer />
  </>
}

export default App
