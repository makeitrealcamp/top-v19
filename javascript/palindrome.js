const str = "Anita lava la tina"

String.prototype.palindrome = function() {
  let str = this.replace(/\s/g, "")
  // const str = this.replaceAll(" ", "") // sólo Node 15 o superior

  let arr = str.split()
  arr = arr.reverse()
  str = arr.join("")
  return this === str
}


str.palindrome()
"hola".palindrome()


const obj = { a: 1, b: 2 }
const arr = [1, 2, 3, 4]
// console.log("for of con objetos ...")
// for (key of obj) { 
//   console.log(key)
// }

console.log("for of con arreglos ...")
for (val of arr) { 
  console.log(val)
}

console.log("for in con objetos ...")
for (key in obj) { 
  console.log(key)
}

console.log("for in con arreglos ...")
for (i in arr) { 
  console.log(i)
}