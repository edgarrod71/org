/// La intención de este archivo es centralizar las variables y arreglos que se usen en diferentes lugares del proyecto
import { v4 as uuid } from "uuid" /// ojo, hay que instalar usando "npm i uuid" antes de usarlo

                                                               
                                                               
const equipos = [ 'Programación', 'Front-End',  'Data Science',  'Devops', 'UX y Diseño', 'Mobile', 'Innovación y Gestión' ];
var fondos = [
    '#d9f7e9', '#e8f8ff', '#f0e8e2', '#fde7e8', '#fae9f5', '#fff5d9', '#ffeedf'
];

const destaques = [
    '#57c278', '#82cffa', '#a6d157', '#e06b69', '#db6ebf', '#ffba05', '#ffba29'
];

const instructores = [
    'https://github.com/edgarrod71.png',
    'https://github.com/harlandlohora.png',
    'https://github.com/genesysaluralatam.png',
    'https://github.com/geanmariealuralatam.png',  
    'https://github.com/christianpva.png',
    'https://github.com/josedariogonzalescha.png'
];

const participantes = [{
    id: uuid(),
    equipo: equipos[0],
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: equipos[1],
    foto: "https://github.com/edgarrod71.png",
    nombre: "Fernando Dager",
    puesto: "Desarrollador iOS/React",
    fav: false
  },
  {
    id: uuid(),
    equipo: equipos[2],
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: equipos[3],
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: equipos[4],
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]

export default {equipos, fondos, destaques, instructores, participantes }