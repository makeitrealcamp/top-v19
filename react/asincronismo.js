// JavaScript es un lenguaje no bloqueante
// sincrónico vs asincrónico
// setTimeout(() => {
//   console.log("Hola Mundo")
// }, 5000)

// console.log("Terminó la ejecución")

// lenguajes bloqueantes
/*content = readFile("README.md") // bloqueante
list = http.get("https://json..../...") // bloqueante
sleep 5 // bloqueante */

// Callbacks 
const fs = require('fs')
fs.readFile("README.md", "utf-8", (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)

  http.post("http://makeitreal.camp", data, () => {
    db.save(() => {
      
    })
  })
})