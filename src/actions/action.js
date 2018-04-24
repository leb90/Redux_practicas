
/**
 * Devuelve una acción de tipo ADD_TODO
 * @param  {String} text Texto del TODO
 * @return {Object}      Objecto de acción
 */
function addTodo(text) {
  return {
      type: 'ADD_TODO',
      payload: {
          text,
      },
  };
}