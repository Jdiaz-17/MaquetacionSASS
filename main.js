// Cuando no es una funcion se comenta en una sola linea
let courses = [
  {
    name: 'Visualización y Storytelling 1.0',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset1.jpg',
    modality: 'Depende de la Modalidad de la materia que selecciones'
  },
  {
    name: 'Programas Básicos',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset1.jpg',
    modality: 'Modalidad Virtual'
  },
  {
    name: 'Visualización y Storytelling 2.0',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset2.jpg',
    modality: 'Universidad de los Andes - Sede Centro'
  },
  {
    name: 'Alternativas innovadoras de solución  a los retos del ordenamiento',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset3.jpg',
    modality: 'Modalidad Virtual'
  },
  {
    name: 'NARRATIVAS DIGITALES',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset4.jpg',
    modality: 'Depende de la Modalidad de la materia que selecciones'
  },
  {
    name: 'Programa Infantil y Juvenil de Formación Musical',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset5.jpg',
    modality: 'Universidad de los Andes - Sede Centro'
  },
  {
    name: 'Herramientas para formular proyectos inmobiliarios',
    startdate: '24 de enero de 2022',
    banner: 'assets/asset6.jpg',
    modality: 'Modalidad Virtual'
  },
]

/** 
 * Esta función recibe un parametro .....
 */
const NombreFuncion = () => {
  // Manera correcta de declarar una función :)
  // Se invoca de igual manera NombreFuncion()
  // No utilizar ; al final de cada sentencia 
}


/// Ejercicios:
// ---------------------------------------
/* 
1. Imprimir en consola, todos los cursos en los que la modalidad es virtual
2. Imprimir en consola, todos los cursos que la modalidad es Universidad de los andes
3. Imprimir en consola, todos los cursos en los que depende de la materia. 
4. Obtener el valor del input "Buscar", y cuando le de clic a buscar, me debe filtrar por el nombre del curso segun el valor que le de.
5. Se debe crear un formulario, en el que obtenga los campos y cree una card nueva con esos datos :) dejar una imagen por defecto.
6. Cuando esté en mobile, (window.screen.width) se deben renderizar en forma de tarjeta todos los item del array de objetos courses.
Renderizar html => https://pretagteam.com/question/using-javascript-function-to-render-html

*/
// ---------------------------------------

// Punto 1, 2 y 3

const coursesmodality = function (modality) {
  return courses.filter (function (e) {
    return e.modality == modality;
  });
};

console.log ("Cursos virtuales", coursesmodality ("Modalidad Virtual"));
console.log ("Cursos de Universidad de los Andes",
  coursesmodality ("Universidad de los Andes - Sede Centro")
);

console.log(
  "Cursos que dependende la modalidad de la materia",
  coursesmodality ("Depende de la Modalidad de la materia que selecciones")
);

/** 
 * Retorna un conjunto de cursos filtraddo por modalidad 
 * Mostrando por consola los cursos por modalidad
 */


// Punto 5 

const initModal = function () {
  document.getElementById("name").value = "";
  document.getElementById("modality").value = "";
  document.getElementById("startdate").value = "";
};

const registerCourse = function () {
  const _name = document.getElementById("name").value;
  const _modality = document.getElementById("modality").value;
  const _startdate = document.getElementById("startdate").value;

  if (_name && _modality && _startdate) {
    console.log(_startdate);
    const date = new Date(_startdate);
    const nameMonth = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "sgosto",
      "setiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    courses.push({
      name: _name,
      startdate:
        date.getDate() +
        " de " +
        nameMonth[date.getMonth()] +
        " de " +
        date.getFullYear(),
      banner: "assets/asset1.jpg",
      modality: _modality,
    });

    document.getElementById("cerrarmodal").click();
    alert("Curso registrado");

    updateContent();
    initModal();
  } else {
    alert("Completa la información del formulario");
  }
};

console.log("Todos Cursos", filterCourses(""));

updateContent();

/** 
 * inicializa el formulario del modal 
 * Valida la información del modal y agrega el curso al arreglo courses
 * obteniendo la información del formulario
 * agregando el curso
 * mostrando por consola todos los cursos
 * mostrando todos los cursos en el catálogo
 */
