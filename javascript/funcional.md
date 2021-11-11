# Programación Funcional

* Inmutabilidad
* Funciones Puras
* Funciones de Orden Superior

## Funciones de Orden Superior

```js
const arr = [1, 2, 3, 4]

// map -> transformar (arreglo -> arreglo)
const arrTransormado = arr.map(function(e) {
  return e * 2
})

// al final terminamos con un nuevo arreglo que tiene la misma
// cantidad de elementos

// filter -> filtrar
const arrFiltrador = arr.filter(function(e) {
  return e % 2 === 0
})

// reduce -> reducir (arreglo -> otra cosa diferente)
const suma = arr.reduce(function(acc, e) {
  return acc + e
}, 0)

// Programación procedimental (imperativa)
let suma = 0
for (let i=0; i < arr.length; i++) {
  suma += arr[i]
}
```

## Recursos

* [Learning Funcional Programming - YouTube](https://www.youtube.com/watch?v=e-5obm1G_FY)
* [Guías de Make It Real](https://guias.makeitreal.camp/javascript-ii/programacion-funcional)