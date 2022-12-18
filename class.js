// 1st and 2nd method answer 
//Start
class complex {
  constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }
  add(num) {
    this.real = num.real + this.real
    this.imaginary = num.imaginary + this.imaginary
  }

  get real() {
    return this._real
  }
  get imaginary() {
    return this._imaginary
  }
  set real(complexReal) {
    this._real = complexReal
  }
  set imaginary(complexImaginary) {
    this._imaginary = complexImaginary
  }
}
let agetting = new complex(1, 4)
console.log(agetting.real)
agetting._imaginary = 5
agetting.real = 2
console.log(agetting.real)
let bgetting = new complex(9, 3)
agetting.add(bgetting)

console.log(`${agetting.real}+${agetting.imaginary}i`)
//End
//Start
class Human {
  constructor(names, classes) {
    this.name = names
    this.class = classes
  }
  infor() {
    console.log(` Your Name : ${this.name} Your Class : ${this.class}`)

  }
}
class student extends Human {
  infor() {
    console.log(`Name : ${this.name} Class : ${this.class}`)
  }
}
let o = new Human()
let d = new student('maya', 4)
d.infor()
console.log(d instanceof Human)
console.log(o instanceof Human )
//End

