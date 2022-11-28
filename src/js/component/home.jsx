import React, { useState } from "react";

//create your first component
const Home = () => {
  //OJO: ACÁ DECLARAMOS LOS ESTADOS:
  //UNO PARA EL STRING DEL INPUT (LA NUEVA TAREA A ESCRIBIR) / OTRO PARA EL ARRAY (LA LISTA DE TAREAS QUE SE VA SUMANDO)
  const [tarea, setTarea] = useState(""); // dato de tipo string
  const [list, setList] = useState([]); // dato de tipo Array

  //ACÁ CREAMOS UNA FUNCIÓN PARA AGREGAR LA NUEVA TAREA AL ARRAY DE LA LISTA DE TAREAS AL DARLE ENTER
  function addTarea(e) {
    //ACÁ COMO LA FUNCIÓN ESTÁ ASOCIADA A UN "evento"... LA FUNCIÓN TIENE COMO PARÁMETRO LA e De evento ASÍ: (e)
    if (e.key === "Enter") {
      //ACÁ PLANTEAMOS LA CONDICIONAL... SI LA TECLA DEL EVENTO ES IGUAL A "Enter"
      setList([...list, tarea]); //QUE "setList" SUME UNA COPIA DE LA LISTA Y LE SUME LA NUEVA "tarea" ENTRANTE (ESTO SE USA PARA SUMAR AL ARRAY EN VEZ DEL METODO PUS)
      setTarea(""); //ACÁ HACEMOS QUE LUEGO DE AGREGAR LA NUEVA TAREA, SE LIMPIE TODO Y QUEDE VACÍO PARA ESCRIBIR UNA NUEVA ENTRADA
    }
  }

  //ACÁ CREAMOS LA FUNCIÓN PARA ELIMINAR LA TAREA CUMPLIDA
  const deleteTarea = (index) => {
    // console.log ("FUNCIONA")
    //const filteredTareas = tarea.filter((item,indexFiltered) => indexFiltered !== index);
	setList(prevState => prevState.filter((item,indexFiltered) => indexFiltered !== index)); 
	console.log (index) // ESTO SOLO LO PUSE AQUÍ PARA CONFIRMAR QUE SE MUESTRA EL ÍNDICE DEL ITEM QUE ELIMINO
	//ACÁ FILTRAS EL setList (que es lo que debe cambiar) USAMOS prevState PARA REFERIRNOS AL ESTADO PREVIO QUE QUEREMOS CAMBIAR (USAMOS COMO PARAMETROS item y indexFiltered -en lugar de index- Y LOS COMPARAMOS: SI EL ESTADO indexFiltered ES DIIIFERENTE A index (el original) ENTONCES...................)
  };

  return (
    <>
      <div className="container col-8 text-center">
        {" "}
        {/* ESTE ES EL DIV QUE ENCAPSULA TODO: INPUT Y LISTADO DE TAREAS */}
        <h1>My To-Do List</h1>
        {/* ACÁ INSERTAMOS EL EL DIV CORRESPONDIENTE AL FORM/INPUT DONDE INSERTAREMOS LAS NUEVAS TAREAS DEL TO-DO LIST */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="AGREGA UNA TAREA, VAGO..."
            onChange={(e) => setTarea(e.target.value)}
            onKeyDown={addTarea}
            value={tarea}
          />{" "}
          {/* ACÁ CREAMOS EL EVENTO PARA DETONAR LA FUNCIÓN A PARTIR DE "onChange" ES DECIR, A PARTIR DE QUE SE INTRODUZCA UNA NUEVA TAREA */}
        </div>
      </div>

      <div className="container col-8 text-center">
        <ul>
          {/* ACÁ INSERTAMOS LA LISTA DE TAREAS DEBAJO DEL INPUT QUE VA AGREGANDO CADA NUEVA TAREA QUE ESCRIBIMOS */}
          {list.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                {item}
                <span>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => deleteTarea(index)}
                  >
                    ❌
                  </button>
                </span>
              </li> // ACÁ INCLUIMOS UN BOTÓN PARA ELIMINAR TAREAS QUE HACE REFERENCIA A LA FUNCIÓN deleteTarea QUE TENEMOS ARRIBA
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Home;

// ASI RECOMIENDA REACT Y ROSI AGREGAR ELEMENTOS AL ARRAY EN REACT
// setFruits(fruits.concat('Manzana'))

{
  /* {items.map(item => {return( <li key={item.id}>{item.value} </li> )})} */
}
