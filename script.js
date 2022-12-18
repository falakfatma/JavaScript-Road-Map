//**Spread**
//[Array]
let arr = ["string", 43, false, ["nextStr", 34, true], { name: "chikki", class: 3, "WannaStudy": false }]
console.log(arr)
let collectNewInArr = ["mango", ...arr]//Use to Duplicate => Array,Object
console.log(collectNewInArr)
//{Object}
let obj = {
  id: 1,
  name: 'Ben',
  about: { 'name': 'Leslie' }
}
console.log(obj)
let collect = {
  'programmer': false
}
let allObj = { ...obj, ...collect }
console.log(allObj)

//**Destructuring**
let fruits = ["mango", "banana", "apple", true, 32]
// let [mango,apple,banana]= fruits
let [mango, , apple, banana] = fruits//apple = apple
//**Hoisting**
birthday()
function birthday() {
  console.log(b)
  var b = `happy birthday`//undefiend
  // let b = `happy birthday`//error
}