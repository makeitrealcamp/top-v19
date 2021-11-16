const obj = { a: 1, b: 2 }
const arr = [1, 2, 3, 4]
// console.log("for of con objetos ... sale un error")
// for (key of obj) { 
//   console.log(key)
// }

console.log("for of con arreglos ... itera por los valores del arreglo")
for (const val of arr) { 
  console.log(val)
}

console.log("for in con objetos ... itera por las llaves")
for (const key in obj) { 
  console.log(key)
}

console.log("for in con arreglos ... itera por los índices")
for (const i in arr) { 
  console.log(i)
}

const object = {
  a: 1, b: 2
}
for (const key in object) {
  if (object.hasOwnProperty(object, key)) {
    const element = object[key];
    
  }
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

const keyArr = Object.keys(object)
for (const key of object) {
  
}