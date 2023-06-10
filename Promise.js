let promises = new Promise((myresolve, myreject) => {
  console.log(`my promise is pending`)
  setTimeout(() => {
    let a = 0
    myresolve(a)
  }, 5000)})
  promises.then((value) => {
    setTimeout(() => {
    console.log(value)
  }, 5000)
  })
  promises.then((value) => {
    console.log(`value`)
  })
  promises.then((value) => {
    console.log(`promise is in process it val is ${value}`)
  })
