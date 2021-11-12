# ECMAScript

* Nuevas formas de definir variables (let y const).
* Funciones flecha.
* Parámetros (argumentos) por defecto.
* Plantillas literales.
* Destructuración.
* Spread Operator (...).
* Métodos concisos.
* Inicialización de objetos.
* Clases
* Módulos

## Nuevas formas de definir variables (let y const).

```js
var a = 5;
let b = 5;
const c = 5; 
```

`let` y `const` limitan el scope (alcance) de la variable.

```js
function hola() {
  var hola = "Pedro"
}

if (true) {
  var color = "negro"
}
color
```

## Funciones flecha

```js
// función nombrada
function hola(name) {
  return "Hola " + name
}

// función anónima que estamos asignando a una variable
const hola = function(name) {
  return "Hola " + name
}

// funciones flecha (anónimas)
const hola = (name) => {
  return "Hola " + name
}

const hola = name => {
  return "Hola " + name
}

const hola = name => "Hola " + name

arr.map(e => e * 2)
```

* Pueden omitir los paréntesis sólo si tienen un argumento.
* Si es sólo una línea puede omitir los corchetes y el `return`.

## Parámetros por defecto

```js
function hola(name="Pedro") {
  return "Hola " + name
}

hola()
```

## Plantillas Literales

```js
function hola(name="Pedro") {
  return `Hola ${name}`
}
```

## Destructuración

```js
const [a, b, c] = [1, 2, 3]

const { a, b } = { a: 5, b: 10 }
```

## Spread Operator (...)

```js
const hola = (...names) => names.map(n => `Hola ${n}`)
console.log(hola("Pedro", "Pablo", "Maria"))
```

```js
const arr = [1, 2, 3]
const arr2 = [6, 7, 8]
const newArr = [0, ...arr, 4, 5, ...arr2]

const obj = {
  name: "Pedro",
  edad: 20
}

const newObj = { ...obj, edad: 30, peso: 70 } // inmutable
```

```js
const arr = [12, 4, 2, 78, 34, 11]
Math.max(...arr)
```

## Métodos concisos

```js
const obj = {
  hola: function() {
    return "Hola"
  }
}

const obj = {
  hola() {
    return "Hola"
  }
}
```

## Inicialización de objetos

```js
const name = "Pedro";
const age = 20;

const obj = { firstName: name, age }
```