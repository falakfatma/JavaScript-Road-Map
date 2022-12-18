
//Normal Function
// function greet() {
//   let name = prompt(`What's Your Name`)
//   alert(`Good Morning ${name} `)
// }
// greet()
//IIFE
(function(d) {
  let name = prompt(`What's Your Name`)
  if (d.getHours() > 12 && d.getHours() < 17) {
    alert(`Good AfterNoon ${name}`)
  } else if (d.getHours() > 16) {
    alert(`Good Evening ${name} `)
  } else {
    alert(`Good Morning ${name} `)
  }
})(new Date())