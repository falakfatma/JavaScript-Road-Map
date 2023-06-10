function sayHello(scr, callback) {
let greet = `hello ${name}, i am learning form ${scr}  `
let script = document.createElement('script')
script.src = scr;
script.onload = function() {
  console.log(`script is load : ${scr}`)
  callback(null, scr)
}
script.onerror = function() {
  console.log('error')
  callback(new Error("failed"))
}
document.body.appendChild(script);
console.log(greet)

}
function goodday(error, scr) {
  if (error) {
    console.log(error)
    return
  }
  alert(`it your script ${scr}`)
}
sayHello('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', goodday)

// 2nd Situation
let promise = new Promise((resolve, rej) => {
  setTimeout(() => {
          resolve('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js')
        // Reject
    rej('https://cdn.jsdelivr.net/npm/bootstrap@5.076876.2/dist/js/bootstrap.bundle.min.js')

  }, 1000)

})
promise.then((value, error) => {
  console.log(value)
  let p2 = new Promise(() => {
    setTimeout(() => {
      console.log(`after 1 sec you see me`)
    }, 1000)
  })
  return p2
}).then((value) => {
  console.log(value)
})
promise.catch((error)=>{
  console.log(`some error is occured`)
})

console.log('hello');

