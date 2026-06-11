import {Schema, model} from 'mongoose'


const Esqueleto_de_tabla = new Schema({
    Alumno : String,
    Materias: String,
    Calificacion: Number,
    Asistencia: Number,
    Promedio: Number,
    Grado: String,


})
export const Tabla = new model("Tabla de datos", Esqueleto_de_tabla)