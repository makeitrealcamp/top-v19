const task = {
  userId: 1,
  title: "Prueba 1",
  completed: false
}

// Web Services
/* POST /webservice

  {
    action: "createTask",
    params: { title: "" }
  }

200 OK

  {
    response: "error",
    result: "not found"
  }
*/

// REST (RESTFul)
// list - GET /tasks (endpoints)
// show - GET /tasks/:id
// create - POST /tasks
// modificarlo - PATCH /tasks/:id
// eliminarlo - DELETE /tasks/:id

// Rutas anidadas
// list - GET /tasks/:taskId/comments
// show - GET /tasks/:taskId/comments/:id
// create - POST /tasks/:taskId/comments
// eliminar - DELETE /tasks/:taskId/comments/:id

// Códigos de respuesta
// 200 OK 
// 204 No Content
// 404 Not Found
// 401 Unauthorized
// 403 Forbidden
// 422 o 409 - errores en la data
// 500 Internal Server Error

// GraphQL

// DELETE
/*fetch("https://jsonplaceholder.typicode.com/todos/2", {
  method: "DELETE"
}).then(r => {
  console.log(r.status)
  return r.json()
})
  .then(d => console.log(d))
  .catch(e => console.log(e.message))*/

// PUT or PATCH
/*fetch("https://jsonplaceholder.typicode.com/todos/2", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ title: "Nuevo Título" })
}).then(r => r.json())
  .then(d => console.log(d))
  .catch(e => console.log(e.message))*/

// POST
/*fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(task)
}).then(r => r.json())
  .then(d => console.log(d))*/


fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Error:", e.message))


async function myFetch() {
  try {
    const response = await fetch("....")
    const data = await response.json()
    return data
  } catch (e) {
    console.log("Error:", e.message)
  } 
}

myFetch().then(data => console.log(data))
console.log("terminó")
 