# Formatos de Intercambio de Información

Son formatos planos o binarios que se utilizan para intercambiar información entre computadores.

Son estructurados para poder ser convertidos a objetos y arreglos.

## XML (eXtensible Markup Language)

Inspirado en HTML:

```xml
<tasks>
  <task name="Lavar la ropa" done="false" />
  <task name="Hacer la cama" done="true" />
</tasks>
```

## JSON (JavaScript Object Notation)

Como valor sólo puede tener:

* String
* Number
* Boolean
* JSON

```json
[
  { "name": "Lavar la ropa", "done": false },
  { "name": "Hacer la cama", "done": true, "subtasks": [] },
]
```

```js
// convierte un JSON a un objeto de JS
const tasks = JSON.parse('[ { "name": "", "done": false }, { "name": "", "done": true } ]')

console.log(tasks)

// convierte un objeto de JS a JSON
JSON.stringify(tasks)
```